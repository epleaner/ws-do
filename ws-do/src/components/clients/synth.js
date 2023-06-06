import { useCallback, useState, useEffect, useMemo } from 'preact/hooks';

import { PolySynth } from '../../utils/polysynth';

const SynthClient = () => {
  const [ws, setWs] = useState(null);
  const [wsUrl, setWsUrl] = useState('');

  const [wsData, setWsData] = useState([]);
  const [heartbeat, setHeartbeatData] = useState(null);
  const [myChannels, setMyChannels] = useState([]);
  const [availableChannels, setAvailableChannels] = useState([]);
  const [id, setId] = useState(null);
  const [polySynth, setPolySynth] = useState(null);

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

  const sendMessageToTargetChannel = useCallback(() => {
    ws?.send(
      JSON.stringify({
        ...JSON.parse(message),
        now: Date.now(),
        channel: targetChannel,
      })
    );
  }, [message, targetChannel, ws]);

  const broadcastMessage = useCallback(
    () =>
      ws?.send(
        JSON.stringify({
          type: 'broadcast',
          message: { ...JSON.parse(message), now: Date.now() },
        })
      ),
    [message, ws]
  );

  const onMessage = useCallback(
    async (event) => {
      const data = await JSON.parse(event.data);

      switch (data.type) {
        case 'id':
          setId(data.id);
          break;
        case 'heartbeat':
          setHeartbeatData(data.data);
          break;
        case 'myChannels':
          setMyChannels(data.channels);
          break;
        case 'availableChannels':
          setAvailableChannels(data.channels);
          break;
        case 'playNote':
          polySynth?.playNote(...data.noteData);
          break;
        case 'stopNote':
          polySynth?.stopNote(...data.noteData);
          break;
      }
      setWsData((p) => [data, ...p]);
    },
    [polySynth]
  );

  useEffect(() => {
    if (!window) return;
    setPolySynth(new PolySynth());
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
        return 'unknown';
    }
  }, [ws?.readyState]);

  useEffect(() => {
    if (wsState === 'open') getChannels();
  }, [getChannels, ws, wsState]);

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
          <button onClick={getChannels}>get channels</button>

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
                onClick={sendMessageToTargetChannel}>
                send to channel
              </button>
              <button disabled={!messageIsValidJSON} onClick={broadcastMessage}>
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
            {wsData.map((data) => (
              <div key={data}>{JSON.stringify(data)}</div>
            ))}
          </div>
        </>
      )}
      {polySynth && (
        <>
          <button onClick={() => polySynth.playNote(64, 127)}>play</button>
          <button onClick={() => polySynth.stopNote(64)}>stop</button>
        </>
      )}
    </div>
  );
};

export default SynthClient;
