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

wss.on('connection', (ws) => {
  ws.id = uuid.v4();
  console.log(`new connection! (id ${ws.id}) | ${wss.clients.size} clients`);

  ws.send(JSON.stringify({ type: 'id', id: ws.id }));

  const heartbeatId = setInterval(() => {
    ws.send(JSON.stringify(process.memoryUsage()), () => null);
  }, 100);

  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'clientConnected', id: ws.id }));
    }
  });

  ws.on('message', (data, isBinary) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.on('close', () => {
    console.log(`connection closed | ${wss.clients.size} clients`);

    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: 'clientDisconnected', id: ws.id }));
      }
    });

    clearInterval(heartbeatId);
  });
});

httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));
