import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default function(state = [], action) {
  console.log(state);
  // https://eslint.org/docs/rules/no-case-declarations
  switch (action.type) {
    case SAVE_COMMENT: {
      return [...state, action.payload];
    }
    case FETCH_COMMENTS: {
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    }
    default: {
      console.log(state);
      return state;
    }
  }
}
