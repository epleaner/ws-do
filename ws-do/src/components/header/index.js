import style from './style.css';

const Header = () => (
  <header class={style.header}>
    <a href='/' class={style.logo}>
      <h1>monitor</h1>
    </a>
    <a href='/synth' class={style.logo}>
      <h1>synth</h1>
    </a>
  </header>
);

export default Header;
