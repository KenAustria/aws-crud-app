import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/presentation/App';
import Root from 'Root';

// Test Structures:

// it('description of the test', () => { 'function containing the test logic' })
// it - Global Function

// expect('value that we are inspecting').'matcher statement...or how we want to inspect'('value that we expect to see')
// expect - Global Function

// This (below) is not the ideal testing approach because it is not possible to check every single component by things like what text it has. This will be the case especially as projects become larger and unwieldy, and you have more and more components that are nested within one another.
// E.g., If we change anything in any of the components nested within the App component (but do not make the change in the 'expect' statement below to reflect the change) this test will fail.
// It will be a nightmare to change every single test of this nature after any changes are made to the components that are nested within, and this is why we should use Enzyme and its Static/Shallow/Full DOM functions for testing.
// We want to avoid writing tests like this (below) where we are giving one component's test file knowledge of the inner workings of another component.
// Correct implementation can also be found in CommentsApp.test.js

it('Entire application renders without crashing', () => {
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
