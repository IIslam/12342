import React from "react";
import logo from "./eqt-logo.png";
import "./Instructions.css";

export default function Instructions() {
  return (
    <div className="App">
      <img src={logo} className="Instructions-logo" alt="Logo" />
      <h1>Hello, dear future EQT Fullstack Engineer!</h1>
      <p>
        This is a code test that is meant to test your creativity and problem
        solving skills.
      </p>
      <p>
        This repository is a barebones setup with a Node backend and a React
        frontend. If you really want to, you can tear it all down and start from
        scratch, but this is meant to get you started immediately.
      </p>
      <h2>The Challenge: Fund Data Visualisation</h2>
      <p>
        <strong>Baseline:</strong> Your job is to provide an overview for an
        investors fund investments. Once your happy with the{" "}
        <strong>baseline </strong>
        pick one of the below tracks (or both if you have the time):
      </p>
      <p>
        <strong>Backend Track:</strong>
      </p>
      <ul>
        <li>
          A user has up until recently only been allowed to invest in 1 fund,
          but due to recent legal changes they are now allowed to invest in
          multiple funds. Make sure the data model and returned data supports
          this new legal requirement!
        </li>
      </ul>
      <p>
        <b>Frontend Track:</b>
      </p>
      <ul>
        <li>
          Get creative with the visualisation, make use of Charts, Search,
          Filters or anything you find interesting.
        </li>
        <li>
          Examples of what can be interesting: Total revenue, performance over
          time, comparison of funds.
        </li>
      </ul>
      <p>
        We want you to{" "}
        <strong>
          explore and create a chart or graph of any aspect of the data. Use any
          charting library you want or whip something up yourself if you prefer
          that. Points for creativity, both in aesthetics and in data analysis.
        </strong>
      </p>
      <p>
        Here is a simple table version of the data. How will <em>you</em> make
        it more fun?
      </p>
      <p style={{ color: "red" }}>Good Luck!</p>
    </div>
  );
}
