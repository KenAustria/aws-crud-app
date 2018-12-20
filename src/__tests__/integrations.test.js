import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/presentation/App';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from 'actions';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('integration test', () => {

  beforeEach(function () {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
    });
    // ^ Moxios intercepting axios' attempted AJAX call and returns an object to axios, fools axios into thinking the object it is getting is from a successful AJAX call
  });

  afterEach(function () {
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

    console.log('helloWorld')

    const expectedActions = [
      { type: 'FETCH_COMMENTS_LOADING', payload: true },
      // { type: 'FETCH_COMMENTS_SUCCESS', payload: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }] },
      // { type: 'FETCH_COMMENTS_LOADING', payload: false },
    ];

    const store = mockStore({ payload: {} })

    store.dispatch(actions.fetchComments())

    console.log('store.getActions() 1', store.getActions());

    // expect(store.getActions()).toEqual(expectedActions);

    moxios.wait(() => {
      wrapped.update();
      store.dispatch(actions.fetchComments())
      console.log('store.getActions() 2', store.getActions());
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
