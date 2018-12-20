import {
  SAVE_COMMENT,
  FETCH_COMMENTS_LOADING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERRORED,
} from 'actions/types';

// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
// When an action is dispatched, a Reducer is the function that actually changes the state appropriate to that action – or returns the existing state if the action is not applicable to that reducer.
// Reducers are “pure functions”. They should not have any side-effects nor mutate the state — they must return a modified copy.
// In Redux, the state is immutable, which means you can’t modify it, so have to return a new state in your reducers instead.
// In Redux, all reducers get called regardless of the action, so inside each one you have to return the original state if the action is not applicable.
// Each reducer takes 2 parameters: the previous state (state) and an action object. We can also use an ES6 feature called default parameters to set the default initial state, which we are doing in reducers below.

export function comments(state = [], action) {
  console.log(state);
  // https://eslint.org/docs/rules/no-case-declarations
  switch (action.type) {
    case SAVE_COMMENT: {
      return [...state, action.payload];
    }
    // Why is this not in a separate reducer function?
    // This is because there could be multiple conditions which would always return an array of comments: it could return all in the case of a fetch_comments_success, it could return a subset of items after a delete action is dispatched, or it could return an empty array if everything is deleted, or as in this function, could return an array of comments which has both fetched and user input data.
    case FETCH_COMMENTS_SUCCESS: {
      console.log(action.payload);
      const comments = action.payload.map(comment => comment.name);
      return [...state, ...comments];
    }
    default: {
      console.log(state);
      return state;
    }
  }
}

export function fetchCommentsErrored(state = false, action) {
  // Inside each reducer, we use a switch statement to determine when an action.type matches. While it may seem unnecessary in these simple reducers, your reducers could theoretically have a lot of conditions, so if/else if/else will get messy fast.
  switch (action.type) {
    case FETCH_COMMENTS_ERRORED:
      // If the action.type matches, then we return the relevant property of action.
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
