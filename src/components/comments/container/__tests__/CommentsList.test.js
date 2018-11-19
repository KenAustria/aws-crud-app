import React from 'react'
import { mount } from 'enzyme'
import CommentsList from 'components/comments/container/CommentsList'
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['comment 1', 'comment 2']
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentsList />
    </Root>
  )
})

it('CommentsList creates one <li> per comment', () => {
  console.log(wrapped.find('li').length);
  expect(wrapped.find('li').length).toEqual(2);
})

it ('CommentsList shows text for each comment', () => {
  console.log(wrapped.render().text())
  expect(wrapped.render().text()).toContain('comment 1')
  expect(wrapped.render().text()).toContain('comment 2')
})
