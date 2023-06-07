import style from './style.css';
import WsClient from '../../components/clients/monitor';

const Home = () => {
  return (
    <div class={style.home}>
      <WsClient />
    </div>
  );
};

export default Home;
