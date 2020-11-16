import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome!

        <button onClick={() => {
          fetch('http://localhost:9090/v1/users')
            .then(response => response.json())
            .then(d => setData(d));
        }}>Fetch users</button>

        <p>{data && JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

export default App;
