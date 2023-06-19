import style from './style.css';
import SynthClient from '../../components/clients/synth';

const Synth = () => {
  return (
    <div class={style.home}>
      <SynthClient />
    </div>
  );
};

export default Synth;
