import {
  SAVE_COMMENT,
  FETCH_COMMENTS_LOADING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERRORED,
} from 'actions/types';
import axios from 'axios';

// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
// The only way to modify the state with Redux is through emitting an action, which is an object that describes what should change. Action creators are the functions that are dispatched to emit a change – all they do is return an action.

// https://decembersoft.com/posts/whats-the-difference-between-action-and-action-creator-in-redux-js/
// An action creator is a function that creates and returns an action.
export function saveComment(comment) {
  return {
    // An action is like a message that we send (i.e. dispatch) to our central Redux store. It can literally be anything. But ideally we want to stick to an agreed-upon pattern.
    type: SAVE_COMMENT,
    payload: comment,
  };
}

// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
// We know that our state needs to have 3 properties: fetchCommentsSuccess, fetchCommentsErrored and fetchCommentsLoading for this application to work as expected under all circumstances, which correlates to needing 3 unique actions.
// Now, here is why action creators are different to actions and do not necessarily have a 1:1 relationship: we need a fourth action creator (fetchComments) that calls our 3 other action (creators) below depending on the status of fetching the data.

export function fetchCommentsLoading(bool) {
  console.log('Action Creator fetchCommentsLoading invoked');
  return {
    type: FETCH_COMMENTS_LOADING,
    payload: bool,
  };
}

export function fetchCommentsSuccess(response) {
  console.log('Action Creator fetchCommentsSuccess invoked');
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: response.data,
  };
}

export function fetchCommentsErrored(bool) {
  console.log('Action Creator fetchCommentsErrored invoked');
  return {
    type: FETCH_COMMENTS_ERRORED,
    payload: bool,
  };
}

// By default, Redux action creators don’t support asynchronous actions like fetching data, so here’s where we utilise Redux Thunk. Thunk allows you to write action creators that return a function instead of an action.

// export function fetchComments() {
//   return dispatch => {
//     dispatch(fetchCommentsLoading(true));
//     axios
//       .get('http://jsonplaceholder.typicode.com/comments')
//       .then(response => {
//         if (response.statusText !== 'OK') {
//           throw Error(response.statusText);
//         }
//         dispatch(fetchCommentsLoading(false));
//         return response;
//       })
//       .then(response => dispatch(fetchCommentsSuccess(response)))
//       .catch(() => dispatch(fetchCommentsErrored(true)));
//   };
// }

export const fetchComments = () => dispatch => {
  dispatch(fetchCommentsLoading(true));
  return axios({
    url: 'http://jsonplaceholder.typicode.com/comments',
    method: 'get',
  })
    .then(response => {
      dispatch(fetchCommentsSuccess(response));
      dispatch(fetchCommentsLoading(false));
      return response;
    })
    .catch(() => {
      dispatch(fetchCommentsErrored(true));
      dispatch(fetchCommentsLoading(false));
      return true;
    });
};
