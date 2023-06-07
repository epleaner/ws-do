import { useCallback, useState, useEffect, useMemo } from 'preact/hooks';

const useWs = () => {
  const [ws, setWs] = useState(null);
  const [wsUrl, setWsUrl] = useState('');
  const [history, setHistory] = useState([]);
  const [heartbeat, setHeartbeat] = useState(null);
  const [myChannels, setMyChannels] = useState([]);
  const [availableChannels, setAvailableChannels] = useState([]);
  const [id, setId] = useState(null);
  const [incomingMessage, setIncomingMessage] = useState('');

  const onMessage = useCallback(async (event) => {
    const data = await JSON.parse(event.data);
    switch (data.type) {
      case 'id':
        setId(data.id);
        break;
      case 'heartbeat':
        setHeartbeat(data.data);
        break;
      case 'myChannels':
        setMyChannels(data.channels);
        break;
      case 'availableChannels':
        setAvailableChannels(data.channels);
        break;
      default:
        setHistory((p) => [data, ...p]);
        break;
    }

    setIncomingMessage(data);
  }, []);

  useEffect(() => {
    if (!window) return;

    const protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
    const port = window.location.protocol.includes('https') ? '' : ':8081';
    const url = `${protocol}://${location.hostname}${port}`;

    setWsUrl(url);
  }, []);

  useEffect(() => {
    if (!wsUrl.length || typeof window === 'undefined') return;

    console.log('attempting to connect to', wsUrl);

    const wsConnection = new WebSocket(wsUrl);
    wsConnection.onmessage = onMessage;

    setWs(wsConnection);
  }, [onMessage, wsUrl]);

  const getChannels = useCallback(() => {
    ws?.send(JSON.stringify({ type: 'myChannels' }));
    ws?.send(JSON.stringify({ type: 'availableChannels' }));
  }, [ws]);

  const wsState = useMemo(() => {
    switch (ws?.readyState) {
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
  }, [ws?.readyState]);

  useEffect(() => {
    if (wsState === 'open') getChannels();
  }, [getChannels, ws, wsState]);

  const joinChannel = useCallback(
    (e) => {
      e.preventDefault();
      ws?.send(
        JSON.stringify({ type: 'joinChannel', channel: e.target.channel.value })
      );
    },
    [ws]
  );

  return {
    ws,
    wsUrl,
    setWsUrl,
    history,
    myChannels,
    availableChannels,
    id,
    incomingMessage,
    wsState,
    joinChannel,
    getChannels,
    heartbeat,
  };
};

export default useWs;
