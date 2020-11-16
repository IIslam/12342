import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  getFundData() {
    this.setState({
      data: [
        { id: 1, fund: "Test Fund 1" },
        { id: 2, fund: "Test Fund 2" },
      ],
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Fund Data Visualisation
          <button onClick={() => this.getFundData()}>
            Fetch Fund Investments
          </button>
          <p>{data && JSON.stringify(data)}</p>
        </header>
      </div>
    );
  }
}
