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
        I love <code>Théo</code>, my cute kitten. Updated yml.
      </p>
    </header>
  </div>
);

export default App;
