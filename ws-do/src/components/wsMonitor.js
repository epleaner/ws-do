import { useCallback, useState, useEffect } from 'preact/hooks';

const WSMonitor = () => {
  const [wsInput, setWsInput] = useState('');
  const [wsUrl, setWsUrl] = useState('');
  const [ws, setWs] = useState(null);
  const [wsData, setWsData] = useState({});
  const [id, setId] = useState(null);

  const onMessage = useCallback(async (event) => {
    const data = await JSON.parse(event.data);
    if (data.id) setId(data.id);
    else setWsData(data);
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

    const wsServer = new WebSocket(wsUrl);

    console.log('ws connection:', wsServer);
    wsServer.onmessage = onMessage;

    setWs(wsServer);
  }, [onMessage, wsUrl]);

  return (
    <div>
      <div>
        <input
          type='text'
          value={wsInput}
          onInput={(e) => {
            console.log(e);
            setWsInput(e.target.value);
          }}
        />
        <button onClick={() => setWsUrl(wsInput)}>go</button>
      </div>
      {id && (
        <>
          <div>ws url: {wsUrl}</div>
          <div>id: {id}</div>

          <div>rss: {wsData.rss}</div>
          <div>heap total: {wsData.heapTotal}</div>
          <div>heap used: {wsData.heapUsed}</div>
          <div>external: {wsData.external}</div>
        </>
      )}
    </div>
  );
};

export default WSMonitor;
