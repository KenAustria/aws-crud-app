import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/presentation/App';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from 'actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('integration test', () => {
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

  it('tests', done => {
    // Attempt to render the *entire* app
    const wrapped = mount(
      <Root>
        <App />
      </Root>,
    );
    // Find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');
    // ^ Will kick off data fetching process

    const store = mockStore({ payload: {} });

    store.dispatch(actions.fetchComments());

    const expectedActions = [
      { type: 'FETCH_COMMENTS_LOADING', payload: true },
      { type: 'FETCH_COMMENTS_SUCCESS', payload: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }] },
      { type: 'FETCH_COMMENTS_LOADING', payload: false },
    ];


    // Need to introduce a TINY little pause for moxios to intercept axios call when action creator called, this way the line below will expect whatever is returned by moxios and not axios
    moxios.wait(() => {
      wrapped.update();
      expect(store.getActions()).toEqual(expectedActions);
      expect(wrapped.find('article')).toHaveLength(2);
      // console.log('store.getActions()', store.getActions());
      done();
      // ^ Jest will consider the test complete only once we invoke the done function
      wrapped.unmount();
      // ^ Clean up at the end of a test
    });
  });
});
