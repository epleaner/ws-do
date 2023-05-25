import { useCallback, useState, useEffect } from 'preact/hooks';

const WSMonitor = () => {
  const [wsUrl, setWsUrl] = useState('');
  const [ws, setWs] = useState(null);
  const [wsData, setWsData] = useState({});

  const onMessage = useCallback(
    async (event) => setWsData(await JSON.parse(event.data)),
    []
  );

  useEffect(() => {
    if (!window) return;

    const protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
    const url = `${protocol}://${location.hostname}`;

    setWsUrl(url);
  }, []);

  useEffect(() => {
    if (!wsUrl.length) return;

    console.log('attempting to connect to', wsUrl);

    const wsServer = new WebSocket(wsUrl);

    console.log('ws server:', wsServer);
    wsServer.onmessage = onMessage;

    setWs(wsServer);
  }, [onMessage, wsUrl]);

  return (
    <div>
      <input
        type='text'
        value={wsUrl}
        onInput={(e) => {
          console.log(e);
          setWsUrl(e.target.value);
        }}
      />
      <div>ws url: {wsUrl}</div>
      <div>rss: {wsData.rss}</div>
      <div>heap total: {wsData.heapTotal}</div>
      <div>heap used: {wsData.heapUsed}</div>
      <div>external: {wsData.external}</div>
    </div>
  );
};

export default WSMonitor;
