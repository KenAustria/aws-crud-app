import { saveComment } from 'actions/comments';
import { SAVE_COMMENT } from 'actions/comments/types';

describe('saveComment', () => {
  it('Has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT)
  });
  it('Has the correct payload', () => {
    const action = saveComment('new comment')
    expect(action.payload).toEqual('new comment')
  });
})
