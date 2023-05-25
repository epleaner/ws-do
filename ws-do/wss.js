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
  console.log(`new connection (id ${ws.id}) | ${wss.clients.size} clients`);

  ws.send(JSON.stringify({ type: 'id', message: ws.id }));

  const heartbeatId = setInterval(() => {
    ws.send(
      JSON.stringify({ type: 'heartbeat', message: process.memoryUsage() })
    );
  }, 100);

  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'clientConnected', message: ws.id }));
    }
  });

  ws.on('message', (data, binary) => {
    const message = binary ? data : data.toString();
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ message, from: ws.id }), {
          binary,
        });
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
