import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { saveComment, fetchComments } from 'actions';
import { SAVE_COMMENT, FETCH_COMMENTS_LOADING, FETCH_COMMENTS_SUCCESS } from 'actions/types';

describe('saveComment Action Creator', () => {
  it('saveComment Action Creator has correct type in its Action', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('saveComment Action Creator returns correct payload in its Action', () => {
    const action = saveComment('new comment');
    expect(action.payload).toEqual('new comment');
  });
});

// https://medium.com/@netxm/test-async-redux-actions-jest-e703add2cf91
// Testing asynchronous code is slightly different than regular functions. When it comes to redux async actions — it’s even more different.

// In this case, what we really want to test is that when we call fetchComments Action Creator anywhere in the application, that it will dispatch FETCH_COMMENTS_LOADING action and then FETCH_COMMENTS_SUCCESS with the expected payload.
// Here we are importing our action, mocking the API call with moxios (which works well with axios) then returning mock data as API response and checking if our action payload is what we expect to see in the end.

describe('Redux-Thunk working properly, dispatch returns associated Action Creators to ensure axios API call succesfully pulling data', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
    });
    // ^ Moxios intercepting axios' attempted AJAX call and returns an object to axios, fools axios into thinking the object it is getting is from a successful AJAX call.
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('tests', done => {
    const store = mockStore({ payload: {} });

    const expectedActions = [
      { type: FETCH_COMMENTS_LOADING, payload: true },
      { type: FETCH_COMMENTS_LOADING, payload: false },
      { type: FETCH_COMMENTS_SUCCESS, payload: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }] },
    ];

    store.dispatch(fetchComments());

    // Need to introduce a TINY little pause for moxios to intercept axios call when action creator called, this way the line below will expect whatever is returned by moxios and not axios.
    moxios.wait(() => {
      // https://stackoverflow.com/questions/48306319/getting-then-of-undefined-when-trying-to-test-a-dispatch-action-function-in-rea?rq=1
      expect(store.getActions()).toEqual(expectedActions);
      done();
      // ^ Jest will consider the test complete only once we invoke the done function.
    });
  });
});
