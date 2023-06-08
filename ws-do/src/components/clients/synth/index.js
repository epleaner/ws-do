import { useCallback, useState, useEffect } from 'preact/hooks';

import { PolySynth } from '../../../utils/polysynth';
import MIDIPiano from './piano';
import useWs from '../../../hooks/useWs';
import Monitor from '../../wsMonitor';

const SynthClient = () => {
  const ws = useWs();

  const { incomingMessage, broadcastMessage } = ws;

  const [polySynth, setPolySynth] = useState(null);
  const [muteIncoming, setMuteIncoming] = useState(false);
  const [muteOutgoing, setMuteOutgoing] = useState(false);
  const [broadcastNotes, setBroadcastNotes] = useState(true);

  useEffect(() => {
    switch (incomingMessage.type) {
      case 'playNote':
        if (!muteIncoming) polySynth?.playNote(...incomingMessage.noteData);
        break;
      case 'stopNote':
        polySynth?.stopNote(...incomingMessage.noteData);
        break;
    }
  }, [polySynth, incomingMessage, muteIncoming]);

  useEffect(() => {
    if (!window) return;
    setPolySynth(new PolySynth());
  }, []);

  const handlePlayNote = useCallback(
    (note) => {
      console.log('playing', note);
      if (polySynth && !muteOutgoing) polySynth.playNote(note);
      if (broadcastNotes)
        broadcastMessage(
          JSON.stringify({ type: 'playNote', noteData: [note] })
        );
    },
    [broadcastMessage, broadcastNotes, muteOutgoing, polySynth]
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
      <Monitor websocket={ws} />

      <div className='mb-2'>
        <div>
          <label htmlFor='mute'>mute incoming notes</label>
          <input
            name={'mute incoming'}
            type='checkbox'
            checked={muteIncoming}
            onChange={() => setMuteIncoming((p) => !p)}
          />
        </div>
        <div>
          <label htmlFor='mute'>mute outgoing notes</label>
          <input
            name={'mute outgoing'}
            type='checkbox'
            checked={muteOutgoing}
            onChange={() => setMuteOutgoing((p) => !p)}
          />
        </div>
        <div>
          <label htmlFor='broadcastNotes'>broadcast notes</label>
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
