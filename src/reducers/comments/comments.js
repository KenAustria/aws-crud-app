import { SAVE_COMMENT } from 'actions/comments/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
