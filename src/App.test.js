import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('I love Théo, my cute boy kitten.');

  // This is not the ideal testing system because it is not possible to check every single component by things like what text it has, especially as projects become larger and unwieldy. It will be a nightmare to change every single test after any changes are made to the components, and this is why we should use Enzyme and its Static/Shallow/Full DOM functions for testing.

  ReactDOM.unmountComponentAtNode(div);
});
