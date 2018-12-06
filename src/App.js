import React, { Component } from 'react';
//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import "survey-react/survey.css";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Client Questionnaire
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Here
          </a>
        </header>
      </div>
    );
  }
}

export default App;
