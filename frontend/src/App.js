import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      funds: null,
      financials: null,
    };
  }

  getFundData() {
    fetch('http://localhost:9090/v1/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
    fetch('http://localhost:9090/v1/funds')
      .then(response => response.json())
      .then(data => this.setState({ funds: data }));
    fetch('http://localhost:9090/v1/fund_financials')
      .then(response => response.json())
      .then(data => this.setState({ financials: data }));
  }

  render() {
    const { users, funds, financials } = this.state;
    return (
      <div className="App">
        <h1 className="header">Fund Data Visualisation</h1>
        <button className="fetch-button" onClick={() => this.getFundData()}>FETCH DATA</button>
        {users &&
          <>
            <h2>User Data</h2>
            {users.map(u => <p>{JSON.stringify(u)}</p>)}
          </>
        }
        {funds &&
          <>
            <h2>Fund Data</h2>
            {funds.map(f => <p>{JSON.stringify(f)}</p>)}
          </>
        }
        {financials &&
          <>
            <h2>Financial Data</h2>
            {financials.map(f => <p>{JSON.stringify(f)}</p>)}
          </>
        }
      </div>
    );
  }
}
