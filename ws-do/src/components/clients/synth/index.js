import { useCallback, useState, useEffect, useMemo } from 'preact/hooks';

import { PolySynth } from '../../../utils/polysynth';
import MIDIPiano from './piano';
import useWs from '../../../hooks/useWs';

const SynthClient = () => {
  const {
    ws,
    wsUrl,
    setWsUrl,
    incomingMessage,
    myChannels,
    availableChannels,
    id,
    wsState,
    joinChannel,
    getChannels,
    heartbeat,
    broadcastMessage,
    sendMessageToTargetChannel,
    history,
  } = useWs();

  const [polySynth, setPolySynth] = useState(null);
  const [mute, setMute] = useState(true);
  const [broadcastNotes, setBroadcastNotes] = useState(true);

  useEffect(() => {
    switch (incomingMessage.type) {
      case 'playNote':
        polySynth?.playNote(...incomingMessage.noteData);
        break;
      case 'stopNote':
        polySynth?.stopNote(...incomingMessage.noteData);
        break;
    }
  }, [polySynth, incomingMessage]);

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

  useEffect(() => {
    if (!window) return;
    setPolySynth(new PolySynth());
  }, []);

  const handleWsUrlChange = useCallback(
    (e) => {
      e.preventDefault();
      setWsUrl(e.target.wsUrl.value);
    },
    [setWsUrl]
  );

  const handlePlayNote = useCallback(
    (note) => {
      console.log('playing', note);
      if (polySynth && !mute) polySynth.playNote(note);
      if (broadcastNotes)
        broadcastMessage(
          JSON.stringify({ type: 'playNote', noteData: [note] })
        );
    },
    [broadcastMessage, broadcastNotes, mute, polySynth]
  );

  const handleStopNote = useCallback(
    (note) => {
      console.log('stopping', note);
      if (polySynth) polySynth.stopNote(note);
      if (broadcastNotes)
        broadcastMessage(
          JSON.stringify({ type: 'stopNote', noteData: [note] })
        );
    },
    [broadcastMessage, broadcastNotes, polySynth]
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

      <div className='mb-2'>
        <div>
          <label className='mr-2' htmlFor='mute'>
            mute
          </label>
          <input
            name={'mute'}
            type='checkbox'
            checked={mute}
            onChange={() => setMute(!mute)}
          />
        </div>
        <div>
          <label className='mr-2' htmlFor='broadcastNotes'>
            broadcast notes
          </label>
          <input
            name={'broadcastNotes'}
            type='checkbox'
            checked={broadcastNotes}
            onChange={() => setBroadcastNotes(!broadcastNotes)}
          />
        </div>
      </div>
      <MIDIPiano onPlayNote={handlePlayNote} onStopNote={handleStopNote} />
    </div>
  );
};

export default SynthClient;
