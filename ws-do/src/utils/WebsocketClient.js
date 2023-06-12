export default class WebsocketClient {
  constructor() {
    this.ws = null;
    this.url = '';
    this.id = null;
    this.hearbeat = null;
    this.incomingMessage = null;
    this.history = [];
    this.myChannels = [];
    this.availableChannels = [];
    this.msgcount = 0;

    try {
      const protocol = window.location.protocol.includes('https')
        ? 'wss'
        : 'ws';
      const port = window.location.protocol.includes('https') ? '' : ':8081';
      this.url = `${protocol}://${location.hostname}${port}`;

      this.connectToUrl(this.url);
    } catch (e) {
      console.log(e);
    }
  }

  connectToUrl(url) {
    try {
      console.log('connecting to', url);

      const connection = new WebSocket(url);
      connection.onmessage = this.onMessage;
      connection.onopen = () => {
        this.getChannels();
      };

      this.ws = connection;
      console.log('connected', url);
    } catch (e) {
      console.log(e);
    }
  }

  onMessage = async (event) => {
    this.msgcount++;
    const data = await JSON.parse(event.data);
    this.incomingMessage = data;

    switch (data.type) {
      case 'id':
        this.id = data.id;
        break;
      case 'heartbeat':
        this.heartbeat = data.heartbeat;
        break;
      case 'myChannels':
        this.myChannels = data.channels;
        break;
      case 'availableChannels':
        this.availableChannels = data.channels;
        break;
      default:
        this.history.unshift(data);
        break;
    }
  };

  getChannels = () => {
    this.ws.send(JSON.stringify({ type: 'myChannels' }));
    this.ws.send(JSON.stringify({ type: 'availableChannels' }));
  };

  joinChannel = (channel) =>
    this.w.send(JSON.stringify({ type: 'joinChannel', channel }));

  broadcastMessage = (message) =>
    this.ws.send(
      JSON.stringify({
        type: 'broadcast',
        message: { ...JSON.parse(message), timestamp: Date.now() },
      })
    );

  sendMessageToTargetChannel = (message, channel) =>
    this.ws.send(
      JSON.stringify({
        ...JSON.parse(message),
        timestamp: Date.now(),
        channel,
      })
    );

  sendMessageToJoinedChannels = (message) =>
    this.ws.send(
      JSON.stringify({ ...JSON.parse(message), timestamp: Date.now() })
    );
}
