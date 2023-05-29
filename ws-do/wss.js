const express = require('express');
const path = require('path');
const { createServer } = require('http');

const WebSocket = require('ws');
const uuid = require('uuid');

const PORT = process.env.PORT || 8081;

const app = express();
app.use(express.static(path.join(__dirname, '/build')));

const httpServer = createServer(app);

const wss = new WebSocket.WebSocketServer({
  server: httpServer,
  clientTracking: true,
});

const channels = {};

function addToChannel(channel, client) {
  channels[channel] = channels[channel]?.length
    ? Array.from(new Set([...channels[channel], client]))
    : [client];
}

function removeFromChannels(client) {
  Object.entries(channels).forEach(
    ([channel, clients]) =>
      (channels[channel] = clients.filter((c) => c !== client))
  );
}

function broadcastMessage({ message, sender }) {
  wss.clients.forEach((client) => {
    if (client !== sender && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ message, from: sender.id }));
    }
  });
}

function sendToChannel({ message, channel, sender }) {
  if (!channels[channel]?.includes(sender)) return;

  channels[channel].forEach((client) => {
    if (
      client !== sender &&
      wss.clients.has(client) &&
      client.readyState === WebSocket.OPEN
    ) {
      client.send(JSON.stringify({ message, channel, from: sender.id }));
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

wss.on('connection', (ws) => {
  ws.id = uuid.v4();
  console.log(`new connection (id ${ws.id}) | ${wss.clients.size} clients`);

  ws.send(JSON.stringify({ type: 'id', message: ws.id }));

  const heartbeatId = setInterval(() => {
    ws.send(
      JSON.stringify({ type: 'heartbeat', message: process.memoryUsage() })
    );
  }, 100);

  broadcastMessage({
    message: { type: 'clientConnected' },
    sender: ws,
  });

  ws.on('message', (data, binary) => {
    const message = binary ? data : JSON.parse(data);

    if (!binary) {
      console.log(message);
      switch (message.type) {
        case 'joinChannel': {
          addToChannel(message.channel, ws);
          sendJoinedChannels(ws);
          break;
        }
        case 'broadcast': {
          broadcastMessage({ message, sender: ws });
          break;
        }
        case 'myChannels': {
          sendJoinedChannels(ws);
          break;
        }
        case 'availableChannels': {
          ws.send(
            JSON.stringify({
              type: 'availableChannels',
              channels: Object.keys(channels),
            })
          );
          break;
        }
        default:
          if (message.channel)
            sendToChannel({ message, channel: message.channel, sender: ws });
          else sendToJoinedChannels({ message, sender: ws });
      }
    }
  });

  ws.on('close', () => {
    console.log(`connection closed | ${wss.clients.size} clients`);

    removeFromChannels(ws);

    broadcastMessage({
      message: { type: 'clientDisconnected' },
      sender: ws,
    });

    clearInterval(heartbeatId);
  });
});

httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));
