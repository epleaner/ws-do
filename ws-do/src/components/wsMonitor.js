import { useCallback, useState, useEffect, useMemo } from 'preact/hooks';

const WSMonitor = () => {
  const [ws, setWs] = useState(null);
  const [wsUrl, setWsUrl] = useState('');

  const [wsData, setWsData] = useState([]);
  const [heartbeat, setHeartbeatData] = useState(null);
  const [myChannels, setMyChannels] = useState([]);
  const [availableChannels, setAvailableChannels] = useState([]);
  const [id, setId] = useState(null);

  const onMessage = useCallback(async (event) => {
    const data = await JSON.parse(event.data);
    switch (data.type) {
      case 'id':
        setId(data.message);
        break;
      case 'heartbeat':
        setHeartbeatData(data.message);
        break;
      case 'myChannels':
        setMyChannels(data.channels);
        break;
      case 'availableChannels':
        setAvailableChannels(data.channels);
        break;
      default:
        setWsData((p) => [data, ...p]);
    }
  }, []);

  useEffect(() => {
    if (!window) return;

    const protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
    const port = window.location.protocol.includes('https') ? '' : ':8081';
    const url = `${protocol}://${location.hostname}${port}`;

    setWsUrl(url);
  }, []);

  useEffect(() => {
    if (!wsUrl.length) return;

    console.log('attempting to connect to', wsUrl);

    const wsConnection = new WebSocket(wsUrl);

    wsConnection.onmessage = onMessage;

    setWs(wsConnection);
  }, [onMessage, wsUrl]);

  const bloopChannel = useCallback(
    (e) => {
      e.preventDefault();
      ws?.send(
        JSON.stringify({
          type: 'bloop',
          now: Date.now(),
          channel: e.target.channel.value,
        })
      );
    },
    [ws]
  );

  const getChannels = useCallback(() => {
    ws?.send(JSON.stringify({ type: 'myChannels' }));
    ws?.send(JSON.stringify({ type: 'availableChannels' }));
  }, [ws]);

  const bloopChannels = useCallback(
    () => ws?.send(JSON.stringify({ type: 'bloop', now: Date.now() })),
    [ws]
  );

  const broadcastBloop = useCallback(
    () =>
      ws?.send(
        JSON.stringify({
          type: 'broadcast',
          message: { type: 'bloop', now: Date.now() },
        })
      ),
    [ws]
  );

  const wsState = useMemo(() => {
    if (!ws) return 'uninitialized';

    switch (ws.readyState) {
      case WebSocket.CONNECTING:
        return 'connecting';
      case WebSocket.OPEN:
        return 'open';
      case WebSocket.CLOSING:
        return 'closing';
      case WebSocket.CLOSED:
        return 'closed';
      default:
        return 'unknown';
    }
  }, [ws, ws?.readyState]);

  useEffect(() => {
    if (wsState === 'open') getChannels();
  }, [ws, wsState]);

  const handleWsUrlChange = useCallback((e) => {
    e.preventDefault();
    setWsUrl(e.target.wsUrl.value);
  }, []);

  const joinChannel = useCallback(
    (e) => {
      e.preventDefault();
      ws?.send(
        JSON.stringify({ type: 'joinChannel', channel: e.target.channel.value })
      );
    },
    [ws]
  );

  return (
    <div>
      <div>state: {wsState}</div>
      <form onSubmit={handleWsUrlChange}>
        <input type='text' name='wsUrl' placeholder={wsUrl} />
        <button type='submit'>go</button>
      </form>

      {ws && (
        <>
          {wsUrl && <div>connected to: {wsUrl}</div>}
          {id && <div>id: {id}</div>}
          {heartbeat && <div>heartbeat: {JSON.stringify(heartbeat)}</div>}
          <form onSubmit={joinChannel}>
            <input type='text' name='channel' />
            <button type='submit'>join channel</button>
          </form>
          <div>my channels: {JSON.stringify(myChannels)}</div>
          <div>available channels: {JSON.stringify(availableChannels)}</div>
          <form onSubmit={bloopChannel}>
            <input type='text' name='channel' />
            <button type='submit'>bloop channel</button>
          </form>
          <button onClick={getChannels}>get channels</button>
          <button onClick={bloopChannels}>bloop my channels</button>
          <button onClick={broadcastBloop}>broadcast bloop</button>

          <div>incoming messages:</div>
          <div style={{ overflow: 'scroll', height: '200px' }}>
            {wsData.map((data) => (
              <div key={data}>{JSON.stringify(data)}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WSMonitor;
