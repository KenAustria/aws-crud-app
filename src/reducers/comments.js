import {
  SAVE_COMMENT,
  FETCH_COMMENTS_LOADING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERRORED,
} from 'actions/types';

// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
// When an action is dispatched, a Reducer is the function that actually changes the state appropriate to that action – or returns the existing state if the action is not applicable to that reducer.
// Reducers are “pure functions”. They should not have any side-effects nor mutate the state — they must return a modified copy.

export function comments(state = [], action) {
  console.log(state);
  // https://eslint.org/docs/rules/no-case-declarations
  switch (action.type) {
    case SAVE_COMMENT: {
      return [...state, action.payload];
    }
    case FETCH_COMMENTS_SUCCESS: {
      console.log(action.payload);
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    }
    default: {
      console.log(state);
      return state;
    }
  }
}

export function fetchCommentsErrored(state = false, action) {
  switch (action.type) {
    case FETCH_COMMENTS_ERRORED:
      return action.payload;
    default:
      return state;
  }
}
export function fetchCommentsLoading(state = false, action) {
  switch (action.type) {
    case FETCH_COMMENTS_LOADING:
      return action.payload;
    default:
      return state;
  }
}
