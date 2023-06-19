import Monitor from '../wsMonitor';
import useWs from '../../hooks/useWs';

const WsClient = () => {
  const ws = useWs();

  return <Monitor websocket={ws} />;
};

export default WsClient;
