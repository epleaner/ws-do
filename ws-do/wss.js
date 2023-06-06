const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');

const WebSocket = require('ws');
const uuid = require('uuid');

const PORT = process.env.PORT || 8081;
const HTTPS_PORT = 8443;

const fs = require('fs');
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');
const credentials = { key, cert };

const app = express();
app.use(express.static(path.join(__dirname, '/build')));

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

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
      console.log(
        'broadcasting message',
        JSON.stringify({ ...message, from: sender.id })
      );
      client.send(JSON.stringify({ ...message, from: sender.id }));
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

wss.on('connection', (ws) => {
  ws.id = uuid.v4();
  console.log(`new connection (id ${ws.id}) | ${wss.clients.size} clients`);

  ws.send(JSON.stringify({ type: 'id', id: ws.id }));

  const heartbeatId = setInterval(() => {
    ws.send(JSON.stringify({ type: 'heartbeat', data: process.memoryUsage() }));
  }, 100);

  broadcastMessage({
    message: { type: 'clientConnected', id: ws.id },
    sender: ws,
  });

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
            sendToChannel({ ...message, channel: message.channel, sender: ws });
          else sendToJoinedChannels({ message, sender: ws });
      }
    }
  });

  ws.on('close', () => {
    console.log(`connection closed | ${wss.clients.size} clients`);

    removeFromChannels(ws);

    broadcastMessage({
      type: 'clientDisconnected',
      sender: ws,
      id: ws.id,
    });

    clearInterval(heartbeatId);
  });
});

httpServer.listen(PORT, () =>
  console.log(`HTTP + websocket server listening on port ${PORT}`)
);

httpsServer.listen(HTTPS_PORT, () =>
  console.log(`HTTPS server listening on port ${HTTPS_PORT}`)
);
