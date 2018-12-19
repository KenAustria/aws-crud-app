import { combineReducers } from 'redux';
import { comments, fetchCommentsLoading, fetchCommentsErrored } from 'reducers/comments';

export default combineReducers({
  comments,
  fetchCommentsLoading,
  fetchCommentsErrored,
});
