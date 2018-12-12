import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/presentation/App';
import Root from 'Root';

// This (below) is not the ideal testing system because it is not possible to check every single component by things like what text it has, especially as projects become larger and unwieldy. It will be a nightmare to change every single test after any changes are made to the components, and this is why we should use Enzyme and its Static/Shallow/Full DOM functions for testing.

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Root>
      <App />
    </Root>,
    div,
  );
  expect(div.innerHTML).toContain('Comments');
  ReactDOM.unmountComponentAtNode(div);
});
