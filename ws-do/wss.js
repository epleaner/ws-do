const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const uuid = require('uuid');
const querystring = require('querystring');

let sendHeartbeat = false;

let Max;

try {
  Max = require('max-api');
  console.log('Max loaded');
} catch (e) {
  console.log('No max');
}

const logger = (...message) => {
  if (Max) Max.post(`wss: ${message}`);
  console.log(...message);
};

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8081;
const HTTPS_PORT = 8443;

const app = express();
app.use(express.static(path.join(__dirname, '/build')));

const httpServer = http.createServer(app);
httpServer.listen(PORT, () =>
  logger(`HTTP + websocket server listening on port ${PORT}`)
);

if (env === 'development') {
  const https = require('https');
  const fs = require('fs');

  const key = fs.readFileSync('./key.pem');
  const cert = fs.readFileSync('./cert.pem');
  const credentials = { key, cert };

  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(HTTPS_PORT, () =>
    logger(`HTTPS server listening on port ${HTTPS_PORT}`)
  );
}

const wss = new WebSocket.WebSocketServer({
  server: httpServer,
  clientTracking: true,
});

const channels = {};

function sendChannelMembers({ channel, target }) {
  if (!channels[channel]) return;

  target.send(
    JSON.stringify({
      type: 'channelMembers',
      channel,
      members: channels[channel].map((client) => client.id),
    })
  );
}

function addToChannel(channel, client) {
  channels[channel] = channels[channel]?.length
    ? Array.from(new Set([...channels[channel], client]))
    : [client];

  channels[channel].forEach((client) =>
    sendChannelMembers({ channel, target: client })
  );
}

function removeFromChannels(client) {
  Object.entries(channels).forEach(([channel, clients]) => {
    channels[channel] = clients.filter((c) => c !== client);
    sendChannelMembers({ channel, target: client });
  });
}

function broadcastMessage({ message, sender }) {
  wss.clients.forEach((client) => {
    if (client !== sender && client.readyState === WebSocket.OPEN) {
      logger(
        'broadcasting message',
        JSON.stringify({ ...message, from: sender.id })
      );
      client.send(JSON.stringify({ ...message, from: sender.id }));
    }
  });
}

function sendToClient({ message, targetId, sender }) {
  for (const c of wss.clients) {
    if (c.id === targetId) {
      console.log('sendToClient', targetId, c);
      if (c && c !== sender && c.readyState === WebSocket.OPEN) {
        c.send(
          JSON.stringify({ ...message, from: sender.id, directMessage: true })
        );
      }
      break;
    }
  }
}

function sendToChannel({ message, channel, sender }) {
  if (!channels[channel]?.includes(sender)) return;

  channels[channel].forEach((client) => {
    if (
      client !== sender &&
      wss.clients.has(client) &&
      client.readyState === WebSocket.OPEN
    ) {
      client.send(JSON.stringify({ ...message, channel, from: sender.id }));
    }
  });
}

function sendToJoinedChannels({ message, sender }) {
  Object.entries(channels).forEach(([channel, clients]) => {
    if (clients.includes(sender)) sendToChannel({ message, channel, sender });
  });
}

function sendJoinedChannels(ws) {
  ws.send(
    JSON.stringify({
      type: 'myChannels',
      channels: Object.keys(channels).filter((channel) =>
        channels[channel].includes(ws)
      ),
    })
  );
}

function sendAvailableChannels(ws) {
  ws.send(
    JSON.stringify({
      type: 'availableChannels',
      channels: Object.keys(channels),
    })
  );
}

wss.on('connection', (ws, req) => {
  ws.id = uuid.v4();
  logger(`new connection (id ${ws.id}) | ${wss.clients.size} clients`);

  ws.send(JSON.stringify({ type: 'id', id: ws.id }));

  const heartbeatId = setInterval(() => {
    if (sendHeartbeat)
      ws.send(
        JSON.stringify({ type: 'heartbeat', heartbeat: process.memoryUsage() })
      );
  }, 100);

  broadcastMessage({
    message: { type: 'clientConnected' },
    sender: ws,
  });

  let params = {};
  if (req.url.indexOf('?') !== -1) {
    const paramString = req.url.split('?')[1];
    params = querystring.parse(paramString);
  }

  if (params.channels) {
    const channels = params.channels.split(',');
    channels.forEach((channel) => addToChannel(channel, ws));
    sendJoinedChannels(ws);
  }

  sendAvailableChannels(ws);

  ws.on('message', (data, binary) => {
    const message = binary ? data : JSON.parse(data);

    if (!binary) {
      switch (message.type) {
        case 'joinChannel': {
          addToChannel(message.channel, ws);
          sendJoinedChannels(ws);
          break;
        }
        case 'broadcast': {
          broadcastMessage({ ...message, sender: ws });
          break;
        }

        case 'myChannels': {
          sendJoinedChannels(ws);
          break;
        }
        case 'availableChannels': {
          sendAvailableChannels(ws);
          break;
        }
        default:
          if (message.targetId)
            sendToClient({ message, targetId: message.targetId, sender: ws });
          if (message.channel)
            sendToChannel({ message, channel: message.channel, sender: ws });
          else sendToJoinedChannels({ message, sender: ws });
      }
    }
  });

  ws.on('close', () => {
    logger(`connection closed | ${wss.clients.size} clients`);

    removeFromChannels(ws);

    broadcastMessage({
      type: 'clientDisconnected',
      sender: ws,
    });

    clearInterval(heartbeatId);
  });
});

if (Max) Max.outlet('wss_ready');
