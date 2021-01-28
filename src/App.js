import logo from './logo.svg';
import { useState } from 'react'
import './App.css';




function App() {
  const [name, setName] = useState('damar')


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
        </p>
        <button onClick={() => setName('jack')}>add me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
