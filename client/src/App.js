import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
      <header className="App-header">
        Fund Data Visualisation
        <button
          onClick={() => {
            fetch("http://localhost:9090/v1/users")
              .then((response) => response.json())
              .then((d) => setData(d));
          }}
        >
          Fetch Fund Investments
        </button>
        <p>{data && JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

export default App;
