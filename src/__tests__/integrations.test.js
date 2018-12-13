import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
  // ^ Moxios intercepting axios' attempted AJAX call and returns an object to axios, fools axios into thinking the object it is getting is from a successful AJAX call
});

afterEach(() => {
  moxios.uninstall();
});

it('Entire app can fetch a list of comments and display them', done => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>,
  );
  // Find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');
  // ^ Will kick off data fetching process

  // Need to introduce a TINY little pause for moxios to intercept axios call when action creator called, this way the line below will expect whatever is returned by moxios and not axios
  moxios.wait(() => {
    wrapped.update();
    // Expect to find a list of comments!
    expect(wrapped.find('article')).toHaveLength(2);
    done();
    // ^ Jest will consider the test complete only once we invoke the done function
    wrapped.unmount();
    // Clean up at the end of a test
  });
});
