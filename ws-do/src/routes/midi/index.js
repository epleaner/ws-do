import style from './style.css';
import MidiClient from '../../components/clients/midi';

const Synth = () => {
  return (
    <div class={style.home}>
      <MidiClient />
    </div>
  );
};

export default Synth;
