import { comments } from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('Handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment',
  };
  const newState = comments([], action);
  expect(newState).toEqual(['new comment']);
});

it('Handles action with unknown type', () => {
  const newState = comments([], { type: 'falskdjfalf' });
  expect(newState).toEqual([]);
});
