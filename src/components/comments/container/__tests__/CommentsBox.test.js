import React from 'react';
import CommentsBox from 'components/comments/container/CommentsBox';
import { mount } from 'enzyme';
// Note: unlike shallow or static rendering, full rendering actually mounts the component in the DOM, which means that tests can affect each other if they are all using the same DOM. Keep that in mind while writing your tests and, if necessary, use .unmount() or something similar as cleanup.

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentsBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('CommentsBox component has a text area and a button', () => {
  expect(wrapped.find('textarea')).toHaveLength(1);
  expect(wrapped.find('button')).toHaveLength(1);
});

it('CommentsBox has a text area users can type in', () => {
  // https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  });
  wrapped.update(); // Because React re-renders components on setState lkfasjdlfk
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});
