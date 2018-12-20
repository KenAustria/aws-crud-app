import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { saveComment, fetchComments } from 'actions';
import { SAVE_COMMENT, FETCH_COMMENTS_LOADING, FETCH_COMMENTS_SUCCESS } from 'actions/types';

describe('saveComment', () => {

  it('Has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('Has the correct payload', () => {
    const action = saveComment('new comment');
    expect(action.payload).toEqual('new comment');
  });
});

describe('Redux-Thunk working properly, dispatch will return associated Action Creators to ensure axios API call succesfully pulling data', () => {

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

    moxios.wait(() => {
      console.log(store.getActions());
      expect(store.getActions()).toEqual(expectedActions);
      done();
      // ^ Jest will consider the test complete only once we invoke the done function.
    });
  });
});
