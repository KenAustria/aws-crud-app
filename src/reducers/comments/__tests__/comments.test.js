import commentsReducer from 'reducers/comments/comments';
import { SAVE_COMMENT } from 'actions/comments/types';

it('Handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };
  const newState = commentsReducer([], action)
  expect(newState).toEqual(['new comment']);
});

it('Handles action with unknown type', () => {
  const newState = commentsReducer([], { type: 'falskdjfalf' })
  expect(newState).toEqual([]);
})
