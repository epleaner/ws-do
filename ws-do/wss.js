const express = require('express');
const path = require('path');
const { createServer } = require('http');

const WebSocket = require('ws');

const PORT = process.env.PORT || 8081;

const app = express();
app.use(express.static(path.join(__dirname, '/build')));

const httpServer = createServer(app);

const wss = new WebSocket.WebSocketServer({
  server: httpServer,
  clientTracking: true,
});

wss.on('connection', (ws) => {
  const id = setInterval(() => {
    ws.send(JSON.stringify(process.memoryUsage()), () => null);
  }, 100);

  console.log('started client interval');

  ws.on('close', () => {
    console.log('stopping client interval');
    clearInterval(id);
  });
});

httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));
