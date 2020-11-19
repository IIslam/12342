import React from 'react'
import logo from './eqt-logo.png'
import './Instructions.css'

export default function Instructions () {
  return (
    <div className="Instructions">
      <img src={logo} className="Instructions-logo" alt="Logo"/>
      <h1>Hello, dear future EQT Fullstack Engineer!</h1>
      <p>
        This is a code test that is meant to test your creativity and problem
        solving skills.
      </p>
      <p>
        This repository is a barebones setup with a Node backend, a Postgres database and a React
        frontend. If you really want to, you can tear it all down and start from
        scratch, but this is meant to get you started immediately.
      </p>
      <div className="challenge-container">
        <h2>The Challenge: Fund Data Visualisation</h2>
        <p>
          <strong>Baseline</strong>
          <p>Your job is to provide an overview for an
            investors fund investments. Once your happy with the<strong> baseline </strong>
            pick one of the below tracks (or both if you have the time):
          </p>
        </p>
        <p>
          <strong>Backend Track</strong>
        </p>
        <p>A user has up until recently only been allowed to invest in 1 fund,
          but due to recent legal changes they are now allowed to invest in
          multiple funds. Make sure the data model and returned data supports
          this new legal requirement!</p>
        <p>
          <strong>Frontend Track</strong>
        </p>
        <p> Get creative with the visualisation, make use of a Table, Charts, Search,
          Filters or anything you find interesting. Examples of what can be interesting from an analytics perspective:
          Total revenue, performance over time, comparison of funds or anything else you can think of.</p>
      </div>
      <strong>Feel free to alter any aspect of this application!</strong>
      <p>Focus on frontend or backend or both.</p>
      <p>Change the code structure in any way you prefer.</p>
      <p>Alter the data model if you want.</p>
      <p>introduce any libraries you feel would help you.</p>
      <p>Add any relevant tests (frontend and/or backend) if you wish.</p>
      <p>Dazzle us.</p>
      <br/>
      <p>
        Press the button below to fetch data from the backend see what you initially have to work with. How
        will <strong>YOU</strong> make
        it more fun?
      </p>
      <p style={{color: '#ff6500'}}>Good Luck!</p>
    </div>
  )
}
