const express = require('express');
const path = require('path');
const http = require('http');
const WebsocketServer = require('./server/WebsocketServer');
const Logger = require('./server/Logger');

const logger = new Logger();

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8081;
const HTTPS_PORT = 8443;

const app = express();
app.use(express.static(path.join(__dirname, '/build')));

const httpServer = http.createServer(app);
new WebsocketServer(logger);

httpServer.listen(PORT, () =>
  logger.log(`HTTP + websocket server listening on port ${PORT}`)
);

if (env === 'development') {
  const https = require('https');
  const fs = require('fs');

  const key = fs.readFileSync('./key.pem');
  const cert = fs.readFileSync('./cert.pem');
  const credentials = { key, cert };

  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(HTTPS_PORT, () =>
    logger.log(`HTTPS server listening on port ${HTTPS_PORT}`)
  );
}
