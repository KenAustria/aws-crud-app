import React from 'react';
import CommentsBox from 'components/comments/container/CommentsBox';
import { mount } from 'enzyme';
// Note: unlike shallow or static rendering, full rendering actually mounts the component in the DOM, which means that tests can affect each other if they are all using the same DOM. Keep that in mind while writing your tests and, if necessary, use .unmount() or something similar as cleanup
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentsBox />
    </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('CommentsBox component has a text area and a button', () => {
  expect(wrapped.find('textarea')).toHaveLength(1);
  expect(wrapped.find('button')).toHaveLength(1);
});

describe('Text Area', () => {
  beforeEach(() => {
    // Tests inside `beforeEach` block will need to be done for both tests below in this `describe` block
    // https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' },
    });
    wrapped.update(); // Because React re-renders components on setState
  });

  it('CommentsBox has a text area users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('When CommentsBox form is submitted text area is emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update(); // Because React re-renders components on setState, and the submit handler function is setting comment state to an empty string
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
