import { SAVE_COMMENT, FETCH_COMMENTS_LOADING, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERRORED } from 'actions/types';

export function comments(state = [], action) {
  console.log(state);
  // https://eslint.org/docs/rules/no-case-declarations
  switch (action.type) {
    case SAVE_COMMENT: {
      return [...state, action.payload];
    }
    case FETCH_COMMENTS_SUCCESS: {
      console.log(action.payload)
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
