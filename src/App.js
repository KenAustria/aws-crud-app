import React from 'react';
import logo from './logo.svg';
import './App.css';

// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
// ^ Functional components preferred over class-based because..easier to read and test, end up with less code, helps to use best practices (airbnb es-lint suggests it) and possible performance boost for future React versions

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        I love <code>Théo</code>, my cute kitten.
      </p>
      <img
        src="https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiNk85aytCRlhXSXYzNGJ3WWxUOVB1SjBGTkxkQ1UyZG4wQWpPSWN6aE5RTjNHempmQXBrWjZaK21rTzBvZk1ibElNQkZpR01JUUlaZlBMK0ZlajduNlVrPSIsIml2UGFyYW1ldGVyU3BlYyI6IlFwRjhzWG9qd01IT0tTRmIiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master"
        alt="AWS CodeBuild Status"
        width="300"
      />
    </header>
  </div>
);

export default App;
