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
    sendMessageToTargetClient,
    sendMessageToTargetChannel,
    sendMessageToJoinedChannels,
  } = websocket;

  const [message, setMessage] = useState('');
  const [targetChannel, setTargetChannel] = useState('');
  const [targetId, setTargetId] = useState('');

  const messageIsValidJSON = useMemo(() => {
    try {
      JSON.parse(message);
    } catch (e) {
      return false;
    }
    return true;
  }, [message]);

  const handleWsUrlChange = useCallback(
    (e) => {
      e.preventDefault();
      setWsUrl(e.target.wsUrl.value);
    },
    [setWsUrl]
  );

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-8'>
        <div>{wsState}</div>
        {ws && wsUrl && <div>connected to: {wsUrl}</div>}
        <form onSubmit={handleWsUrlChange}>
          <input type='text' name='wsUrl' placeholder={wsUrl} />
          <button type='submit'>go</button>
        </form>
      </div>

      {ws && (
        <>
          <div>
            {id && <div>id: {id}</div>}
            {heartbeat && <div>heartbeat: {JSON.stringify(heartbeat)}</div>}
          </div>

          <div>
            <div className='flex flex-row gap-8'>
              <button onClick={getChannels}>get channels</button>
              <form onSubmit={joinChannel}>
                <input type='text' name='channel' />
                <button type='submit' className='ml-2'>
                  join channel
                </button>
              </form>
            </div>
            <ul>
              my channels:
              {myChannels.map(({ channel, members }) => (
                <li key={channel} className={'ml-2'}>
                  {channel} | {members.length} members: {members.join(', ')}
                </li>
              ))}
            </ul>
            <ul>
              all channels:
              {availableChannels.map(({ channel, members }) => (
                <li key={channel} className={'ml-2'}>
                  {channel}{' '}
                  {members.length
                    ? `| ${members.length} members: ${members.join(', ')}`
                    : '(no members)'}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className='flex flex-col gap-1'>
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
              <div>
                <label htmlFor='targetChannel'>target client</label>
                <input
                  name='targetId'
                  type='text'
                  value={targetId}
                  onInput={(e) => setTargetId(e.target.value)}
                />
              </div>
              <div>
                <button
                  disabled={!messageIsValidJSON}
                  onClick={() => sendMessageToTargetClient(message, targetId)}>
                  send to another client
                </button>
                <button
                  disabled={!messageIsValidJSON}
                  onClick={() =>
                    sendMessageToTargetChannel(message, targetChannel)
                  }>
                  send to channel
                </button>
                <button
                  disabled={!messageIsValidJSON}
                  onClick={() => sendMessageToJoinedChannels(message)}>
                  send to joined channel
                </button>
                <button
                  disabled={!messageIsValidJSON}
                  onClick={() => broadcastMessage(message)}>
                  broadcast
                </button>
              </div>
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
