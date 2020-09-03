import React from 'react';
import Routes from './components/routes/Routes';//Import routes
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Electron Boilerplate</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">Link to the About Page</Link>
      </header>
      <>
        <Routes />
      </>
    </div>
  );
}

export default App;
