import { useCallback, useMemo, useState } from 'preact/hooks';

const WsMonitor = ({ websocket }) => {
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
    broadcastMessage,
    sendMessageToTargetChannel,
    sendMessageToJoinedChannels,
  } = websocket;

  const [message, setMessage] = useState('');
  const [targetChannel, setTargetChannel] = useState('');

  const messageIsValidJSON = useMemo(() => {
    try {
      JSON.parse(message);
    } catch (e) {
      return false;
    }
    return true;
  }, [message]);

  const bloopChannel = useCallback(
    (e) => {
      e.preventDefault();
      sendMessageToTargetChannel(
        JSON.stringify({
          type: 'bloop',
          channel: e.target.channel.value,
        })
      );
    },
    [sendMessageToTargetChannel]
  );

  const bloopChannels = useCallback(
    () => sendMessageToJoinedChannels(JSON.stringify({ type: 'bloop' })),
    [sendMessageToJoinedChannels]
  );

  const broadcastBloop = useCallback(
    () => broadcastMessage(JSON.stringify({ type: 'bloop' })),
    [broadcastMessage]
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

          <div>
            <div>
              <div>
                <label htmlFor='message'>message</label>
                <textarea
                  cols={100}
                  rows={1}
                  name='message'
                  placeholder={`{"hello": 1}`}
                  value={message}
                  onInput={(e) => setMessage(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='targetChannel'>target channel</label>
                <input
                  name='targetChannel'
                  type='text'
                  value={targetChannel}
                  onInput={(e) => setTargetChannel(e.target.value)}
                />
              </div>
              <button
                disabled={!messageIsValidJSON}
                onClick={() =>
                  sendMessageToTargetChannel(message, targetChannel)
                }>
                send to channel
              </button>
              <button
                disabled={!messageIsValidJSON}
                onClick={() => broadcastMessage(message)}>
                broadcast
              </button>
              {}
            </div>
            {!messageIsValidJSON && message.length ? (
              <div>Invalid JSON</div>
            ) : (
              <></>
            )}
          </div>

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

export default WsMonitor;
