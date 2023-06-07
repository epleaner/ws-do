import { useCallback } from 'preact/hooks';
import useWs from '../../hooks/useWs';

const WsClient = () => {
  const {
    ws,
    wsUrl,
    setWsUrl,
    history,
    myChannels,
    availableChannels,
    id,
    wsState,
    joinChannel,
    getChannels,
    heartbeat,
  } = useWs();

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

  const handleWsUrlChange = useCallback(
    (e) => {
      e.preventDefault();
      setWsUrl(e.target.wsUrl.value);
    },
    [setWsUrl]
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
            {history.map((data) => (
              <div key={data}>{JSON.stringify(data)}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WsClient;
