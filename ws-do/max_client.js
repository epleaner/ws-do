const path = require('path');
const Max = require('max-api');
const WebSocket = require('ws');

const digitalOceanConfig = {
  protocol: 'wss',
  host: 'ws-do-fp9an.ondigitalocean.app/',
  wsPort: '',
};
const localConfig = {
  protocol: 'ws',
  host: 'localhost',
  wsPort: '8081',
};

const { protocol, host, wsPort } = localConfig;
// const { protocol, host, wsPort } = digitalOceanConfig;

const wsUrl = `${protocol}://${host}:${wsPort}`;

console.log('Attempting to establish ws connection');

let ws;
let restartInterval = 5000;

const connect = () => {
  ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    Max.post(`ws connection established with ${wsUrl}`);
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    Max.outlet(data);
  };

  ws.onclose = () => {
    Max.post('ws connected closed');

    if (restartInterval != 0) setTimeout(connect, restartInterval);
    else process.exit(1);
  };

  ws.onerror = (err) => {
    Max.post(`ws error: ${err.message}`);
  };
};

const sendMessage = (msg) => {
  let jsonMsg = JSON.stringify(msg);

  Max.post(`sending: ${jsonMsg}`);

  ws.send(jsonMsg);
};

connect();

// MAX WORLD

Max.post(`loaded ${path.basename(__filename)} script`);
Max.post(`requesting ws connection to ${wsUrl}`);

// Use the 'addHandler' function to register a function for a particular message
Max.addHandler('bang', () => {
  Max.post(`Bang: ${new Date().toString()}`);
  sendMessage(`Bang: ${new Date().toString()}`);
});

// Use the 'outlet' function to send messages out of node.script's outlet
Max.addHandler('echo', (msg) => {
  Max.outlet(msg);
});

Max.addHandler('start', () => {
  Max.post('Started');
});

Max.addHandler('noteout', (...msg) => {
  sendMessage({ type: 'broadcast', message: { type: 'noteOut', data: msg } });
});

Max.addHandler('list', (...msg) => {
  Max.post('list', msg);

  // sendMessage(`Values: [${msg.join(', ')}]`);
});
