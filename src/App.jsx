import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SearchInput from './components/SearchInput';

function App() {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Autofill Search Input</h2>
      <SearchInput />
    </div>
  );
}

export default App;
