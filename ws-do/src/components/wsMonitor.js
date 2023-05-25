import { useCallback, useState, useEffect } from 'preact/hooks';

const WSMonitor = () => {
  const [wsData, setWsData] = useState({});
  const [ws, setWs] = useState(null);

  const onMessage = useCallback(
    async (event) => setWsData(await JSON.parse(event.data)),
    []
  );

  useEffect(() => {
    if (!window) return;

    const protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
    const wsUrl = `${protocol}://${location.hostname}:8081`;

    console.log('attempting to connect to', wsUrl);

    const wsServer = new WebSocket(wsUrl);

    console.log('ws server:', wsServer);
    wsServer.onmessage = onMessage;

    setWs(wsServer);
  }, [onMessage]);

  return (
    <div>
      <div>rss: {wsData.rss}</div>
      <div>heap total: {wsData.heapTotal}</div>
      <div>heap used: {wsData.heapUsed}</div>
      <div>external: {wsData.external}</div>
    </div>
  );
};

export default WSMonitor;
