import { useCallback, useState, useEffect } from 'preact/hooks';

const WSMonitor = () => {
  const [ws, setWs] = useState(null);
  const [wsInput, setWsInput] = useState('');
  const [wsUrl, setWsUrl] = useState('');

  const [wsData, setWsData] = useState(null);
  const [heartbeat, setHeartbeatData] = useState(null);
  const [id, setId] = useState(null);

  const onMessage = useCallback(async (event) => {
    const data = await JSON.parse(event.data);
    console.log(data);
    switch (data.type) {
      case 'id':
        setId(data.message);
        break;
      case 'heartbeat':
        setHeartbeatData(data.message);
        break;
      default:
        setWsData(data);
    }
  }, []);

  useEffect(() => {
    if (!window) return;

    const protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
    const url = `${protocol}://${location.hostname}`;

    setWsInput(url);
  }, []);

  useEffect(() => {
    if (!wsUrl.length) return;

    console.log('attempting to connect to', wsUrl);

    const wsConnection = new WebSocket(wsUrl);

    wsConnection.onmessage = onMessage;

    setWs(wsConnection);
  }, [onMessage, wsUrl]);

  const sendBloop = useCallback(() => {
    if (!ws) return;
    let bloop = '1234';
    ws.send(JSON.stringify({ bloop }));
  }, [ws]);

  return (
    <div>
      <div>
        <input
          type='text'
          value={wsInput}
          onInput={(e) => setWsInput(e.target.value)}
        />
        <button onClick={() => setWsUrl(wsInput)}>go</button>
      </div>
      {wsUrl && <div>ws url: {wsUrl}</div>}
      {id && <div>id: {id}</div>}
      {heartbeat && <div>heartbeat: {JSON.stringify(heartbeat)}</div>}
      {wsData && <div>other data: {JSON.stringify(wsData)}</div>}
      <button onClick={sendBloop}>bloop</button>
    </div>
  );
};

export default WSMonitor;
