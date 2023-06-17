const WebSocket = require('ws');
const WebsocketServer = require('./WebsocketServer.test');

describe('WebsocketServer', () => {
  let httpServer;
  let websocketServer;

  beforeEach(() => {
    httpServer = {}; // Mock http server
    websocketServer = new WebsocketServer(httpServer);
  });

  afterEach(() => {
    // Clean up channels and clients
    websocketServer.channels = {};
    websocketServer.wss.clients.clear();
  });

  it('should add client to channel', () => {
    const client = { id: 'client1' };
    const channel = 'channel1';

    websocketServer.addToChannel(channel, client);

    expect(websocketServer.channels[channel]).toEqual([client]);
  });

  it('should add client to existing channel', () => {
    const client1 = { id: 'client1' };
    const client2 = { id: 'client2' };
    const channel = 'channel1';

    websocketServer.addToChannel(channel, client1);
    websocketServer.addToChannel(channel, client2);

    expect(websocketServer.channels[channel]).toEqual([client1, client2]);
  });

  it('should remove client from channel', () => {
    const client = { id: 'client1' };
    const channel = 'channel1';

    websocketServer.channels[channel] = [client];

    websocketServer.removeFromChannel(channel, client);

    expect(websocketServer.channels[channel]).toBeUndefined();
  });

  it('should remove client from multiple channels', () => {
    const client = { id: 'client1' };
    const channel1 = 'channel1';
    const channel2 = 'channel2';

    websocketServer.channels[channel1] = [client];
    websocketServer.channels[channel2] = [client];

    websocketServer.removeFromChannels(client);

    expect(websocketServer.channels[channel1]).toBeUndefined();
    expect(websocketServer.channels[channel2]).toBeUndefined();
  });

  it('should broadcast message to all clients except sender', () => {
    const sender = { id: 'sender' };
    const client1 = {
      id: 'client1',
      readyState: WebSocket.OPEN,
      send: jest.fn(),
    };
    const client2 = {
      id: 'client2',
      readyState: WebSocket.OPEN,
      send: jest.fn(),
    };
    const client3 = {
      id: 'client3',
      readyState: WebSocket.CLOSED,
      send: jest.fn(),
    };

    websocketServer.wss.clients = new Set([client1, client2, client3]);

    const message = { type: 'broadcast', content: 'Hello' };

    websocketServer.broadcastMessage({ message, sender });

    expect(client1.send).toHaveBeenCalledWith(
      JSON.stringify({ ...message, from: sender.id })
    );
    expect(client2.send).toHaveBeenCalledWith(
      JSON.stringify({ ...message, from: sender.id })
    );
    expect(client3.send).not.toHaveBeenCalled();
  });

  it('should send message to specific client', () => {
    const sender = { id: 'sender' };
    const targetId = 'client1';
    const client1 = {
      id: 'client1',
      readyState: WebSocket.OPEN,
      send: jest.fn(),
    };
    const client2 = {
      id: 'client2',
      readyState: WebSocket.CLOSED,
      send: jest.fn(),
    };

    websocketServer.wss.clients = new Set([client1, client2]);

    const message = { type: 'directMessage', content: 'Hi' };

    websocketServer.sendToClient({ message, targetId, sender });

    expect(client1.send).toHaveBeenCalledWith(
      JSON.stringify({ ...message, from: sender.id, directMessage: true })
    );
    expect(client2.send).not.toHaveBeenCalled();
  });

  it('should send message to clients in a channel', () => {
    const sender = { id: 'sender' };
    const client1 = {
      id: 'client1',
      readyState: WebSocket.OPEN,
      send: jest.fn(),
    };
    const client2 = {
      id: 'client2',
      readyState: WebSocket.OPEN,
      send: jest.fn(),
    };
    const client3 = {
      id: 'client3',
      readyState: WebSocket.CLOSED,
      send: jest.fn(),
    };

    const channel = 'channel1';

    websocketServer.channels[channel] = [client1, client2, client3];
    websocketServer.wss.clients = new Set([client1, client2, client3]);

    const message = { type: 'channelMessage', content: 'Hello' };

    websocketServer.sendToChannel({ message, channel, sender });

    expect(client1.send).toHaveBeenCalledWith(
      JSON.stringify({ ...message, channel, from: sender.id })
    );
    expect(client2.send).toHaveBeenCalledWith(
      JSON.stringify({ ...message, channel, from: sender.id })
    );
    expect(client3.send).not.toHaveBeenCalled();
  });

  it('should send message to clients in joined channels', () => {
    const sender = { id: 'sender' };
    const client1 = {
      id: 'client1',
      readyState: WebSocket.OPEN,
      send: jest.fn(),
    };
    const client2 = {
      id: 'client2',
      readyState: WebSocket.OPEN,
      send: jest.fn(),
    };
    const client3 = {
      id: 'client3',
      readyState: WebSocket.CLOSED,
      send: jest.fn(),
    };

    const channel1 = 'channel1';
    const channel2 = 'channel2';

    websocketServer.channels[channel1] = [client1, client3];
    websocketServer.channels[channel2] = [client2, client3];

    websocketServer.wss.clients = new Set([client1, client2, client3]);

    const message = { type: 'channelMessage', content: 'Hello' };

    websocketServer.sendToJoinedChannels({ message, sender });

    expect(client1.send).toHaveBeenCalledWith(
      JSON.stringify({ ...message, channel: channel1, from: sender.id })
    );
    expect(client2.send).toHaveBeenCalledWith(
      JSON.stringify({ ...message, channel: channel2, from: sender.id })
    );
    expect(client3.send).not.toHaveBeenCalled();
  });
});
