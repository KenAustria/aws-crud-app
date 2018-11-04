import React from 'react';
import './App.css';

// We get a couple of neat tools bundled with `create-react app`:
// Webpack - Links together .js files (bundling for deployment, `npm run build`).
// Babel - Turns ES2015/6/7 and JSX into ES5 code (for older browsers to be able to read).
// Jest - Automated test runner [ initiated when we do `npm run test` -> finds all files ending with `.test.js` and executes tests inside of them -> prints results to terminal -> waits for any file changes, then runs all tests again ]

// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
// ^ Functional components preferred over class-based because..easier to read and test, end up with less code, helps to use best practices (airbnb es-lint suggests it) and possible performance boost for future React versions

const App = () => (
  <div className="App">
    <h2>I love Théo, my cute boy kitten.</h2>
  </div>
);

export default App;
