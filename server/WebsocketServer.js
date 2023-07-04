const WebSocket = require('ws');
const uuid = require('uuid');
const querystring = require('querystring');
const Logger = require('./Logger');

class WebsocketServer {
  constructor({ logger }) {
    this.wss = new WebSocket.Server({
      noServer: true,
      clientTracking: true,
    });

    this.channels = {};

    this.logger = logger || new Logger();

    this.initializeHandlers();

    this.sendChannelMembershipUpdates =
      this.sendChannelMembershipUpdates.bind(this);

    this.addToChannel = this.addToChannel.bind(this);
    this.removeFromChannel = this.removeFromChannel.bind(this);
    this.removeFromChannels = this.removeFromChannels.bind(this);
    this.broadcastMessage = this.broadcastMessage.bind(this);
    this.sendToClient = this.sendToClient.bind(this);
    this.sendToChannel = this.sendToChannel.bind(this);
    this.sendToJoinedChannels = this.sendToJoinedChannels.bind(this);
    this.sendJoinedChannels = this.sendJoinedChannels.bind(this);
    this.sendAvailableChannels = this.sendAvailableChannels.bind(this);
    this.initializeHandlers = this.initializeHandlers.bind(this);
    this.processQueryParams = this.processQueryParams.bind(this);
  }

  sendChannelMembershipUpdates(client) {
    this.logger.log('sending channel membership updates to', client.id);
    this.sendJoinedChannels(client);
  }

  addToChannel(channel, client) {
    this.channels[channel] = this.channels[channel]?.length
      ? Array.from(new Set([...this.channels[channel], client]))
      : [client];
  }

  removeFromChannel(channel, client) {
    this.channels[channel] = this.channels[channel].filter((c) => c !== client);
    if (!this.channels[channel].length) delete this.channels[channel];
  }

  removeFromChannels(client) {
    Object.entries(this.channels).forEach(([channel]) =>
      this.removeFromChannel(channel, client)
    );
  }

  broadcastMessage({ message, sender }) {
    this.wss.clients.forEach((client) => {
      if (client !== sender && client.readyState === WebSocket.OPEN) {
        this.logger.log(
          'broadcasting message',
          JSON.stringify({ ...message, from: sender.id })
        );
        client.send(JSON.stringify({ ...message, from: sender.id }));
      }
    });
  }

  sendToClient({ message, targetId, sender }) {
    if (sender.id === targetId) return;

    for (const c of this.wss.clients) {
      if (c.id === targetId && c.readyState === WebSocket.OPEN) {
        c.send(
          JSON.stringify({ ...message, from: sender.id, directMessage: true })
        );
        break;
      }
    }
  }

  sendToClientOnChannel({ message, targetId, channel, sender }) {
    if (!this.channels[channel]?.includes(sender)) return;

    const targetClient = this.channels[channel].find((c) => c.id === targetId);
    if (!targetClient) return;

    if (
      targetClient !== sender &&
      this.wss.clients.has(targetClient) &&
      targetClient.readyState === WebSocket.OPEN
    )
      targetClient.send(
        JSON.stringify({ ...message, channel, targetId, from: sender.id })
      );
  }

  sendToChannel({ message, channel, sender }) {
    if (!this.channels[channel]?.includes(sender)) return;

    this.channels[channel].forEach((client) => {
      if (
        client !== sender &&
        this.wss.clients.has(client) &&
        client.readyState === WebSocket.OPEN
      )
        client.send(JSON.stringify({ ...message, channel, from: sender.id }));
    });
  }

  sendToJoinedChannels({ message, sender }) {
    Object.entries(this.channels).forEach(([channel, clients]) => {
      if (clients.includes(sender))
        this.sendToChannel({ message, channel, sender });
    });
  }

  sendJoinedChannels(ws) {
    this.logger.log('sending joined channels');
    ws.send(
      JSON.stringify({
        type: 'joinedChannels',
        channels: Object.keys(this.channels)
          .filter((channel) => this.channels[channel].includes(ws))
          .map((channel) => ({
            channel,
            members: this.channels[channel].map((c) => c.id),
          })),
      })
    );
  }

  sendAvailableChannels(ws) {
    this.logger.log('sending available channels');
    ws.send(
      JSON.stringify({
        type: 'availableChannels',
        channels: Object.keys(this.channels).map((channel) => ({
          channel,
          members: this.channels[channel].map((c) => c.id),
        })),
      })
    );
  }

  processQueryParams(url) {
    let params = {};
    if (url.indexOf('?') !== -1) {
      const paramString = url.split('?')[1];
      params = querystring.parse(paramString);
    }

    return params;
  }

  initializeHandlers() {
    this.wss.on('connection', (client, req) => {
      client.id = uuid.v4();

      this.logger.log(
        `new connection (id ${client.id}) | ${this.wss.clients.size} clients`
      );

      client.send(JSON.stringify({ type: 'id', id: client.id }));
      this.broadcastMessage({
        message: { type: 'clientConnected' },
        sender: client,
      });

      const params = this.processQueryParams(req.url);

      if (params.channels) {
        const channels = params.channels.split(',');
        channels.forEach((channel) => this.addToChannel(channel, client));
      }

      client.on('message', (data, binary) => {
        try {
          const message = binary ? data : JSON.parse(data);

          console.log('received message', message);

          if (!binary) {
            switch (message.type) {
              case 'joinChannel': {
                this.addToChannel(message.channel, client);
                this.wss.clients.forEach(this.sendChannelMembershipUpdates);
                break;
              }
              case 'leaveChannel': {
                this.removeFromChannel(message.channel, client);
                this.wss.clients.forEach(this.sendChannelMembershipUpdates);
                break;
              }
              case 'broadcast': {
                this.broadcastMessage({ ...message, sender: client });
                break;
              }
              case 'joinedChannels': {
                this.sendJoinedChannels(client);
                break;
              }
              case 'availableChannels': {
                this.sendAvailableChannels(client);
                break;
              }
              default:
                if (message.targetId) {
                  if (message.channel) {
                    this.sendToClientOnChannel({
                      message,
                      targetId: message.targetId,
                      channel: message.channel,
                      sender: client,
                    });
                  } else
                    this.sendToClient({
                      message,
                      targetId: message.targetId,
                      sender: client,
                    });
                  break;
                } else if (message.channel) {
                  this.sendToChannel({
                    message,
                    channel: message.channel,
                    sender: client,
                  });
                  break;
                } else {
                  this.sendToJoinedChannels({ message, sender: client });
                  break;
                }
            }
          }
        } catch (e) {
          console.log('error parsing message', e);
        }
      });

      client.on('close', () => {
        this.logger.log(`connection closed | ${this.wss.clients.size} clients`);

        this.removeFromChannels(client);
        this.broadcastMessage({
          type: 'clientDisconnected',
          sender: client,
        });

        this.wss.clients.forEach(this.sendChannelMembershipUpdates);
      });

      this.wss.clients.forEach(this.sendChannelMembershipUpdates);
    });

    this.logger.log('wss_ready');
  }
}

module.exports = WebsocketServer;
