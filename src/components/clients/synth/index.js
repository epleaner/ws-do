import { useCallback, useState, useEffect } from 'preact/hooks';

import PolySynth from '../../../utils/polysynth';
import MIDIPiano from './piano';
import useWs from '../../../hooks/useWs';
import Monitor from '../../wsMonitor';

const SynthClient = () => {
  const ws = useWs();

  const {
    incomingMessage,
    broadcastMessage,
    myChannels,
    sendMessageToTargetClient,
  } = ws;

  const [polySynth, setPolySynth] = useState(null);
  const [muteIncoming, setMuteIncoming] = useState(false);
  const [muteOutgoing, setMuteOutgoing] = useState(false);
  const [broadcastNotes, setBroadcastNotes] = useState(true);

  useEffect(() => {
    if (!incomingMessage) return;
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

  const [sequencerIntervalId, setSequencerIntervalId] = useState(null);

  const handleSequenceChannel = useCallback(
    (channelName) => {
      if (!channelName.length) return;

      if (sequencerIntervalId) clearInterval(sequencerIntervalId);
      console.log('setting new interval id');

      let sequenceTarget;

      setSequencerIntervalId(
        setInterval(() => {
          const targetChannel = myChannels.find(
            (c) => c.channel === channelName
          );
          if (!targetChannel) return;
          console.log('targetChannel', targetChannel);

          const members = targetChannel.members.filter((m) => m !== ws.id);
          if (!members.length) return;
          console.log('members', members);

          const targetIndex = sequenceTarget
            ? (members.findIndex((m) => m === sequenceTarget) + 1) %
              members.length
            : 0;

          sequenceTarget = sequenceTarget ? members[targetIndex] : members[0];

          console.log('sequencing', members, sequenceTarget, targetIndex);

          sendMessageToTargetClient(
            JSON.stringify({ type: 'playNote', noteData: [69 + targetIndex] }),
            sequenceTarget
          );

          setTimeout(() => {
            sendMessageToTargetClient(
              JSON.stringify({
                type: 'stopNote',
                noteData: [69 + targetIndex],
              }),
              sequenceTarget
            );
          }, 100);
        }, 1000)
      );

      return () => clearInterval(sequencerIntervalId);
    },
    [myChannels, sendMessageToTargetClient, sequencerIntervalId, ws.id]
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
      <div className='flex flex-row gap-2 mb-2'>
        <span>sequence to channel</span>
        <select
          className='px-1'
          name='channel'
          onChange={(e) => handleSequenceChannel(e.target.value)}>
          <>
            <option />
            {myChannels.map((c) => (
              <option key={c.channel}>{c.channel}</option>
            ))}
          </>
        </select>
      </div>
      <MIDIPiano onPlayNote={handlePlayNote} onStopNote={handleStopNote} />
    </div>
  );
};

export default SynthClient;
