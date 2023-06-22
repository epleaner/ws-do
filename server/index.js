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

  const WSS = require('./WebsocketServer');
  const Logger = require('./Logger');
  const logger = new Logger();

  const app = express();
  app.use(express.static(path.join(__dirname, '../build')));

  const port = process.env.PORT || 3000;
  const server = app.listen(port, function () {
    console.log('HTTP/WS server started on port', port);
  });

  const wsServer = new WSS({ logger });

  server.on('upgrade', (request, socket, head) => {
    console.log('????????', request.query);
    wsServer.wss.handleUpgrade(request, socket, head, (socket) => {
      console.log('!!!!!!!!!!!!!', request.query);
      wsServer.wss.emit('connection', socket, request);
    });
  });

  const env = process.env.NODE_ENV;

  if (env === 'development') {
    const https = require('https');
    const fs = require('fs');

    const key = fs.readFileSync('./key.pem');
    const cert = fs.readFileSync('./cert.pem');
    const credentials = { key, cert };

    const httpsPort = process.env.HTTPS_PORT || 3443;

    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(httpsPort, () =>
      logger.log(`HTTPS server started on port`, httpsPort)
    );

    httpsServer.on('upgrade', (request, socket, head) => {
      console.log('????????', request.query);
      wsServer.wss.handleUpgrade(request, socket, head, (socket) => {
        console.log('!!!!!!!!!!!!!!', request.query);
        wsServer.wss.emit('connection', socket, request);
      });
    });
  }
}
