import {
  SAVE_COMMENT,
  FETCH_COMMENTS_LOADING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERRORED,
} from 'actions/types';
import axios from 'axios';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchCommentsLoading(bool) {
  console.log('action fetchCommentsLoading:', bool);
  return {
    type: FETCH_COMMENTS_LOADING,
    payload: bool,
  };
}

export function fetchCommentsSuccess(response) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: response,
  };
}

export function fetchCommentsErrored(bool) {
  return {
    type: FETCH_COMMENTS_ERRORED,
    payload: bool,
  };
}

export function fetchComments() {
  return dispatch => {
    dispatch(fetchCommentsLoading(true));
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.statusText !== 'OK') {
          throw Error(response.statusText);
        }
        dispatch(fetchCommentsLoading(false));
        return response;
      })
      // .then((response) => response.json())
      .then(response => dispatch(fetchCommentsSuccess(response)))
      .catch(() => dispatch(fetchCommentsErrored(true)));
  };
}
