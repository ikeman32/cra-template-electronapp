import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './components/routes/Routes';//Import routes
import './App.scss';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            Home
          </Link>
        </nav>
      </header>
      <>
      <Routes />
      </>
    </div>
  );
}

export default App;
