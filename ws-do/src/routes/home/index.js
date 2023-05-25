import { h } from 'preact';
import style from './style.css';
import WsMonitor from '../../components/wsMonitor';

const Home = () => {
  return (
    <div class={style.home}>
      <h1>🐳</h1>
      <WsMonitor />
    </div>
  );
};

export default Home;
