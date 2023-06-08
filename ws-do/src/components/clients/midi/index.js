import { useState, useEffect } from 'preact/hooks';

import { MIDIHandler } from '../../../utils/midihandler';
import useWs from '../../../hooks/useWs';
import Monitor from '../../wsMonitor';

const MidiClient = () => {
  const ws = useWs();

  const [midiHandler, setMidiHandler] = useState(null);

  useEffect(() => {
    if (!window || !navigator) return;
    console.log('??????????');
    setMidiHandler(new MIDIHandler());
  }, []);

  return (
    <div>
      <Monitor websocket={ws} />
      <div id='device-select-container' style='display: block;'>
        <p>press shift+space to toggle controls</p>
        <label for='device-select'>Select MIDI Device:</label>
        <select id='device-select' />
      </div>
    </div>
  );
};

export default MidiClient;
