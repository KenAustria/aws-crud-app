import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('<h2>I love Théo, my cute boy kitten.</h2>');

  ReactDOM.unmountComponentAtNode(div);
});
