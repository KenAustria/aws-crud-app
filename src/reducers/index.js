import { combineReducers } from 'redux';
import { comments, fetchCommentsLoading, fetchCommentsErrored } from 'reducers/comments';

// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
// There is 1 global state object in Redux that manages the state for your entire application. It is the single source of truth.
// Individual reducers are combined into a single rootReducer to create the discrete properties of the state.

export default combineReducers({
  comments,
  fetchCommentsLoading,
  fetchCommentsErrored,
});
