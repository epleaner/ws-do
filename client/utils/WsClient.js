class WsClient {
  constructor({ handleMessage }) {
    this.ws = null;
    this.wsUrl = '';
    this.history = [];
    this.heartbeat = null;
    this.myChannels = [];
    this.availableChannels = [];
    this.id = null;
    this.incomingMessage = '';
    this.handleMessage = handleMessage;

    this.onMessage = this.onMessage.bind(this);
    this.getChannels = this.getChannels.bind(this);
    this.joinChannel = this.joinChannel.bind(this);
    this.broadcastMessage = this.broadcastMessage.bind(this);
    this.sendMessageToTargetChannel =
      this.sendMessageToTargetChannel.bind(this);
    this.sendMessageToTargetClient = this.sendMessageToTargetClient.bind(this);
    this.sendMessageToJoinedChannels =
      this.sendMessageToJoinedChannels.bind(this);
  }

  connect(url) {
    if (!url.length || typeof window === 'undefined') return;

    console.log('attempting to connect to', url);

    if (this.ws) this.ws.close();

    this.ws = new WebSocket(this.wsUrl);
    this.ws.onmessage = this.onMessage;
  }

  initialize() {
    if (typeof window === 'undefined') return;

    const protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
    const port = window.location.protocol.includes('https') ? '' : ':8081';
    const url = `${protocol}://${location.hostname}${port}?channels=welcome`;

    this.wsUrl = url;
    connect(url);
  }

  onMessage(event) {
    const data = JSON.parse(event.data);

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

    this.incomingMessage = data;
    this.handleMessage(data);
  }

  getChannels() {
    this.ws?.send(JSON.stringify({ type: 'myChannels' }));
    this.ws?.send(JSON.stringify({ type: 'availableChannels' }));
  }

  joinChannel(e) {
    e.preventDefault();
    this.ws?.send(
      JSON.stringify({ type: 'joinChannel', channel: e.target.channel.value })
    );
  }

  broadcastMessage(message) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(
        JSON.stringify({
          type: 'broadcast',
          message: { ...JSON.parse(message), timestamp: Date.now() },
        })
      );
    }
  }

  sendMessageToTargetChannel(message, channel) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(
        JSON.stringify({
          ...JSON.parse(message),
          timestamp: Date.now(),
          channel,
        })
      );
    }
  }

  sendMessageToTargetClient(message, targetId) {
    console.log('sending to target id', message, targetId);
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(
        JSON.stringify({
          ...JSON.parse(message),
          timestamp: Date.now(),
          targetId,
        })
      );
    }
  }

  sendMessageToJoinedChannels(message) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(
        JSON.stringify({
          ...JSON.parse(message),
          timestamp: Date.now(),
        })
      );
    }
  }

  get wsState() {
    if (typeof window === 'undefined') return 'uninitialized';

    switch (this.ws?.readyState) {
      case WebSocket.CONNECTING:
        return 'connecting';
      case WebSocket.OPEN:
        return 'open';
      case WebSocket.CLOSING:
        return 'closing';
      case WebSocket.CLOSED:
        return 'closed';
      default:
        return 'uninitialized';
    }
  }

  initializeAndConnect() {
    this.initialize();
    this.getChannels();
  }
}

export default WsClient;
