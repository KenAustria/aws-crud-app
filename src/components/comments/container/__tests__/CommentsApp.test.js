import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CommentsApp from '../CommentsApp.js';
// Enzyme APIs:
// Static - Render the given component and return plain HTML
// Shallow - Render just the given component and none of its children
// Full DOM - Render the component and all of its children + let us modify it afterwards
import CommentsBox from '../CommentsBox.js';

it('shows CommentsBox component', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<CommentsApp />, div);
  // expect(div.innerHTML).toContain('CommentsBox Component');
  // ^ We want to avoid knowing the innerworkings of other components, we just want to check and make sure it loads up in the CommentsApp component.
  // We no longer need ReactDOM because we are using Enzyme, and it serves the purpose of ReactDOM.

  const wrapped = shallow(<CommentsApp />);
  expect(wrapped.find(CommentsBox)).toHaveLength(1);

  // ReactDOM.unmountComponentAtNode(div);
});
