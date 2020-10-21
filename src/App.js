import React from 'react';
import './App.css';
import Navbar from './Navbar';
import NavItem from './NavItem';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

function App() {
  return (
    <div className="app">
      <Navbar>
        <NavItem icon='🚀' />
        <NavItem icon='🚀' />
        <NavItem icon='🚀' />
      </Navbar>
    </div>
  );
}

export default App;
