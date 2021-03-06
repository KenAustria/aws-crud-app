import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
// Enzyme APIs:
// Static - Render the given component and return plain HTML. { render }
// Shallow - Render just the given component and none of its children components.
// Full DOM - Render the component and all of its children + let us modify it afterwards. { mount }
// import { shallow, mount, render } from 'enzyme';
import CommentsApp from 'components/presentation/CommentsApp';
import CommentsBox from 'components/container/CommentsBox';
import CommentsList from 'components/container/CommentsList';

let wrapped;
// ^ Because JS scoping
// Whatever is defined within function curly braces are only in scope of that particualr function and not available anywhere else.

beforeEach(() => {
  wrapped = shallow(<CommentsApp />);
});

it('shows CommentsBox component', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<CommentsApp />, div);
  // expect(div.innerHTML).toContain('CommentsBox Component');
  // ^ We want to avoid knowing the inner workings of other components, we just want to check and make sure it loads up in the CommentsApp component. It is only okay for us to know that the other component simply exists.
  // We no longer need ReactDOM because we are using Enzyme, and it serves the purpose of ReactDOM.
  expect(wrapped.find(CommentsBox)).toHaveLength(1);
  // ReactDOM.unmountComponentAtNode(div);
});

it('shows CommentsList component', () => {
  expect(wrapped.find(CommentsList)).toHaveLength(1);
});
