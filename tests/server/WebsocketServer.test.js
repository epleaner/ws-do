const WebSocket = require('ws');
const WebsocketServer = require('../../server/WebsocketServer');

// Mock dependencies
jest.mock('ws');
jest.mock('../../server/Logger', () => {
  return jest.fn().mockImplementation(() => {
    return {
      log: jest.fn(),
    };
  });
});

describe('WebsocketServer', () => {
  let server;
  let mockLogger;

  beforeEach(() => {
    mockLogger = {
      log: jest.fn(),
    };
    WebSocket.Server.mockClear();
    server = new WebsocketServer({ logger: mockLogger });
  });

  describe('constructor', () => {
    it('should create a WebSocket.Server instance with correct options', () => {
      expect(WebSocket.Server).toHaveBeenCalledWith({
        noServer: true,
        clientTracking: true,
      });
    });

    it('should initialize channels as an empty object', () => {
      expect(server.channels).toEqual({});
    });

    it('should create a new Logger instance if logger is not provided', () => {
      const newServer = new WebsocketServer({});
      expect(newServer.logger).toBeDefined();
    });

    it('should assign the provided logger', () => {
      expect(server.logger).toBe(mockLogger);
    });

    it('should bind the necessary methods', () => {
      expect(server.sendChannelMembershipUpdates).toBeDefined();
      expect(server.addToChannel).toBeDefined();
      expect(server.removeFromChannel).toBeDefined();
      expect(server.removeFromChannels).toBeDefined();
      expect(server.broadcastMessage).toBeDefined();
      expect(server.sendToClient).toBeDefined();
      expect(server.sendToChannel).toBeDefined();
      expect(server.sendToJoinedChannels).toBeDefined();
      expect(server.sendJoinedChannels).toBeDefined();
      expect(server.sendAvailableChannels).toBeDefined();
      expect(server.initializeHandlers).toBeDefined();
      expect(server.processQueryParams).toBeDefined();
    });
  });

  describe('sendChannelMembershipUpdates', () => {
    it('should send joined channels to the specified client', () => {
      const client = { id: '123' };
      server.channels = {
        channel1: [client],
        channel2: [client],
      };
      server.sendJoinedChannels = jest.fn();

      server.sendChannelMembershipUpdates(client);

      expect(server.sendJoinedChannels).toHaveBeenCalledWith(client);
    });
  });

  describe('addToChannel', () => {
    it('should add a client to the specified channel', () => {
      const client = { id: '123' };

      server.addToChannel('channel1', client);

      expect(server.channels.channel1).toEqual([client]);
    });

    it('should create a new channel if it does not exist', () => {
      const client = { id: '123' };

      server.addToChannel('channel1', client);

      expect(server.channels.channel1).toBeDefined();
    });

    it('should append a client to an existing channel', () => {
      const client1 = { id: '123' };
      const client2 = { id: '456' };
      server.channels.channel1 = [client1];

      server.addToChannel('channel1', client2);

      expect(server.channels.channel1).toEqual([client1, client2]);
    });
  });

  describe('removeFromChannel', () => {
    it('should remove a client from the specified channel', () => {
      const client = { id: '123' };
      const client2 = { id: '124' };
      server.channels.channel1 = [client, client2];

      server.removeFromChannel('channel1', client);

      expect(server.channels.channel1).toEqual([client2]);
    });

    it('should delete the channel if it becomes empty', () => {
      const client = { id: '123' };
      server.channels.channel1 = [client];

      server.removeFromChannel('channel1', client);

      expect(server.channels.channel1).toBeUndefined();
    });
  });

  describe('removeFromChannels', () => {
    it('should remove a client from all channels', () => {
      const client = { id: '123' };
      server.channels = {
        channel1: [client],
        channel2: [client],
      };

      server.removeFromChannels(client);

      expect(server.channels).toEqual({});
    });
  });

  describe('broadcastMessage', () => {
    it('should broadcast a message to all connected clients except the sender', () => {
      const sender = { id: '123', readyState: WebSocket.OPEN };
      const client1 = {
        id: '456',
        readyState: WebSocket.OPEN,
        send: jest.fn(),
      };
      const client2 = {
        id: '789',
        readyState: WebSocket.OPEN,
        send: jest.fn(),
      };
      server.wss.clients = new Set([sender, client1, client2]);

      const message = { type: 'message' };
      server.broadcastMessage({ message, sender });

      expect(client1.send).toHaveBeenCalledWith(
        JSON.stringify({ ...message, from: sender.id })
      );
      expect(client2.send).toHaveBeenCalledWith(
        JSON.stringify({ ...message, from: sender.id })
      );
    });

    it('should not send a message to the sender', () => {
      const sender = { id: '123', readyState: WebSocket.OPEN, send: jest.fn() };
      server.wss.clients = new Set([sender]);

      const message = { type: 'message' };
      server.broadcastMessage({ message, sender });

      expect(sender.send).not.toHaveBeenCalled();
    });

    it('should not send a message to clients with readyState different from WebSocket.OPEN', () => {
      const sender = { id: '123', readyState: WebSocket.OPEN };
      const client1 = {
        id: '456',
        readyState: WebSocket.CLOSED,
        send: jest.fn(),
      };
      const client2 = {
        id: '789',
        readyState: WebSocket.CONNECTING,
        send: jest.fn(),
      };
      server.wss.clients = new Set([sender, client1, client2]);

      const message = { type: 'message' };
      server.broadcastMessage({ message, sender });

      expect(client1.send).not.toHaveBeenCalled();
      expect(client2.send).not.toHaveBeenCalled();
    });
  });

  describe('sendToClient', () => {
    it('should send a message to the specified client', () => {
      const sender = { id: '123' };
      const targetId = '456';
      const client = {
        id: targetId,
        readyState: WebSocket.OPEN,
        send: jest.fn(),
      };
      server.wss.clients = new Set([sender, client]);

      const message = { type: 'message' };
      server.sendToClient({ message, targetId, sender });

      expect(client.send).toHaveBeenCalledWith(
        JSON.stringify({ ...message, from: sender.id, directMessage: true })
      );
    });

    it('should not send a message to the target client if it is not found', () => {
      const sender = { id: '123' };
      const targetId = '456';
      server.wss.clients = new Set([sender]);

      const message = { type: 'message' };
      server.sendToClient({ message, targetId, sender });

      // No error should be thrown
    });

    it('should not send a message to the sender', () => {
      const sender = { id: '123', readyState: WebSocket.OPEN, send: jest.fn() };
      server.wss.clients = new Set([sender]);

      const message = { type: 'message' };
      server.sendToClient({ message, targetId: '123', sender });

      expect(sender.send).not.toHaveBeenCalled();
    });

    it('should not send a message if the target client has readyState different from WebSocket.OPEN', () => {
      const sender = { id: '123' };
      const targetId = '456';
      const client = {
        id: targetId,
        readyState: WebSocket.CLOSED,
        send: jest.fn(),
      };
      server.wss.clients = new Set([sender, client]);

      const message = { type: 'message' };
      server.sendToClient({ message, targetId, sender });

      expect(client.send).not.toHaveBeenCalled();
    });
  });

  describe('sendToClientOnChannel', () => {
    it('should send a message to the specified client on the specified channel', () => {
      const sender = { id: '123' };
      const targetId = '456';
      const channel = 'channel1';
      const client = {
        id: targetId,
        readyState: WebSocket.OPEN,
        send: jest.fn(),
      };
      server.channels[channel] = [sender, client];
      server.wss.clients = new Set([sender, client]);

      const message = { type: 'message' };
      server.sendToClientOnChannel({ message, targetId, channel, sender });

      expect(client.send).toHaveBeenCalledWith(
        JSON.stringify({ ...message, channel, targetId, from: sender.id })
      );
    });

    it('should not send a message if the sender is not a member of the specified channel', () => {
      const sender = { id: '123' };
      const targetId = '456';
      const channel = 'channel1';
      const client = {
        id: targetId,
        readyState: WebSocket.OPEN,
        send: jest.fn(),
      };
      server.channels[channel] = [client];

      const message = { type: 'message' };
      server.sendToClientOnChannel({ message, targetId, channel, sender });

      expect(client.send).not.toHaveBeenCalled();
    });

    it('should not send a message if the target client is not found on the specified channel', () => {
      const sender = { id: '123' };
      const targetId = '456';
      const channel = 'channel1';
      server.channels[channel] = [sender];

      const message = { type: 'message' };
      server.sendToClientOnChannel({ message, targetId, channel, sender });

      // No error should be thrown
    });

    it('should not send a message if the target client has readyState different from WebSocket.OPEN', () => {
      const sender = { id: '123' };
      const targetId = '456';
      const channel = 'channel1';
      const client = {
        id: targetId,
        readyState: WebSocket.CLOSED,
        send: jest.fn(),
      };
      server.channels[channel] = [sender, client];
      server.wss.clients = new Set([sender, client]);

      const message = { type: 'message' };
      server.sendToClientOnChannel({ message, targetId, channel, sender });

      expect(client.send).not.toHaveBeenCalled();
    });
  });

  describe('sendToChannel', () => {
    it('should send a message to all clients in the specified channel except the sender', () => {
      const sender = { id: '123' };
      const client1 = {
        id: '456',
        readyState: WebSocket.OPEN,
        send: jest.fn(),
      };
      const client2 = {
        id: '789',
        readyState: WebSocket.OPEN,
        send: jest.fn(),
      };
      server.channels.channel1 = [sender, client1, client2];
      server.wss.clients = new Set([sender, client1, client2]);

      const message = { type: 'message' };
      server.sendToChannel({ message, channel: 'channel1', sender });

      expect(client1.send).toHaveBeenCalledWith(
        JSON.stringify({ ...message, channel: 'channel1', from: sender.id })
      );
      expect(client2.send).toHaveBeenCalledWith(
        JSON.stringify({ ...message, channel: 'channel1', from: sender.id })
      );
    });

    it('should not send a message to clients who are not members of the specified channel', () => {
      const sender = { id: '123' };
      const client = { id: '456', readyState: WebSocket.OPEN, send: jest.fn() };
      server.channels.channel1 = [client];

      const message = { type: 'message' };
      server.sendToChannel({ message, channel: 'channel1', sender });

      expect(client.send).not.toHaveBeenCalled();
    });

    it('should not send a message to clients with readyState different from WebSocket.OPEN', () => {
      const sender = { id: '123' };
      const client1 = {
        id: '456',
        readyState: WebSocket.CLOSED,
        send: jest.fn(),
      };
      const client2 = {
        id: '789',
        readyState: WebSocket.CONNECTING,
        send: jest.fn(),
      };
      server.channels.channel1 = [sender, client1, client2];
      server.wss.clients = new Set([sender, client1, client2]);

      const message = { type: 'message' };
      server.sendToChannel({ message, channel: 'channel1', sender });

      expect(client1.send).not.toHaveBeenCalled();
      expect(client2.send).not.toHaveBeenCalled();
    });
  });

  describe('sendToJoinedChannels', () => {
    it('should send a message to all clients in the joined channels except the sender', () => {
      const sender = { id: '123' };
      const client1 = {
        id: '456',
        readyState: WebSocket.OPEN,
        send: jest.fn(),
      };
      const client2 = {
        id: '789',
        readyState: WebSocket.OPEN,
        send: jest.fn(),
      };
      server.channels = {
        channel1: [sender, client1],
        channel2: [sender, client2],
      };
      server.wss.clients = new Set([sender, client1, client2]);

      const message = { type: 'message' };
      server.sendToJoinedChannels({ message, sender });

      expect(client1.send).toHaveBeenCalledWith(
        JSON.stringify({ ...message, channel: 'channel1', from: sender.id })
      );
      expect(client2.send).toHaveBeenCalledWith(
        JSON.stringify({ ...message, channel: 'channel2', from: sender.id })
      );
    });

    it('should not send a message to clients who are not members of any channel', () => {
      const sender = { id: '123' };
      const client = { id: '456', readyState: WebSocket.OPEN, send: jest.fn() };
      server.channels = {
        channel1: [client],
      };

      const message = { type: 'message' };
      server.sendToJoinedChannels({ message, sender });

      expect(client.send).not.toHaveBeenCalled();
    });

    it('should not send a message to clients with readyState different from WebSocket.OPEN', () => {
      const sender = { id: '123' };
      const client1 = {
        id: '456',
        readyState: WebSocket.CLOSED,
        send: jest.fn(),
      };
      const client2 = {
        id: '789',
        readyState: WebSocket.CONNECTING,
        send: jest.fn(),
      };
      server.channels = {
        channel1: [sender, client1],
        channel2: [sender, client2],
      };

      server.wss.clients = new Set([sender, client1, client2]);

      const message = { type: 'message' };
      server.sendToJoinedChannels({ message, sender });

      expect(client1.send).not.toHaveBeenCalled();
      expect(client2.send).not.toHaveBeenCalled();
    });
  });

  describe('sendJoinedChannels', () => {
    it('should send the joined channels to the specified client', () => {
      const client = { id: '123', readyState: WebSocket.OPEN, send: jest.fn() };
      server.channels = {
        channel1: [client],
        channel2: [client],
      };

      server.sendJoinedChannels(client);

      expect(client.send).toHaveBeenCalledWith(
        JSON.stringify({
          type: 'joinedChannels',
          channels: [
            { channel: 'channel1', members: ['123'] },
            { channel: 'channel2', members: ['123'] },
          ],
        })
      );
    });

    it('should not send any channels if the client is not a member of any channel', () => {
      const client = { id: '123', readyState: WebSocket.OPEN, send: jest.fn() };
      server.channels = {};

      server.sendJoinedChannels(client);

      expect(client.send).toHaveBeenCalledWith(
        JSON.stringify({
          type: 'joinedChannels',
          channels: [],
        })
      );
    });
  });
});
