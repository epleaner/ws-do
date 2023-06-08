const Header = () => (
  <header className='items-center fixed w-full h-10 z-50 flex bg-slate-800 shadow-xl gap-4'>
    <a
      href='/'
      className='hover:bg-slate-700 transition-colors h-full flex items-center px-4'>
      <h1>monitor</h1>
    </a>
    <a
      href='/synth'
      className='hover:bg-slate-700 transition-colors h-full flex items-center px-4'>
      <h1>synth</h1>
    </a>
    <a
      href='/midi'
      className='hover:bg-slate-700 transition-colors h-full flex items-center px-4'>
      <h1>midi</h1>
    </a>
  </header>
);

export default Header;
