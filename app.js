const ws = require('ws');
const path = require('path');

// Include the cluster module
const cluster = require('cluster');

// Code to run if we're in the master process
if (cluster.isMaster) {
  // Count the machine's CPUs
  const cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  // Listen for terminating workers
  cluster.on('exit', function (worker) {
    // Replace the terminated workers
    console.log('Worker ' + worker.id + ' died :(');
    cluster.fork();
  });

  // Code to run if we're in a worker process
} else {
  const express = require('express');

  const app = express();
  app.use(express.static(path.join(__dirname, '/build')));

  const port = process.env.PORT || 3000;
  const server = app.listen(port, function () {
    console.log('Server started at', new Date(Date.now()).toLocaleString());
  });

  const wsServer = new ws.Server({ noServer: true });
  wsServer.on('connection', (socket) => {
    console.log('new ws connection');
    socket.on('message', (message) => {
      console.log('incoming message');
      console.log(message);
    });
  });

  server.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, (socket) => {
      wsServer.emit('connection', socket, request);
    });
  });
}
