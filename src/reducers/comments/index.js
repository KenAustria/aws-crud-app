import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments/comments';

export default combineReducers({
  comments: commentsReducer,
});
