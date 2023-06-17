import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Synth from '../routes/synth';
import MIDI from '../routes/midi';

const App = () => (
  <div id='app'>
    <Header />
    <main>
      <Router>
        <Home path='/' />
        <Synth path='/synth' />
        <MIDI path='/midi' />
      </Router>
    </main>
  </div>
);

export default App;
