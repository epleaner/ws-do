import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

export default function MIDIPiano({ onPlayNote, onStopNote }) {
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote,
    lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return (
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={onPlayNote}
      stopNote={onStopNote}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
}
