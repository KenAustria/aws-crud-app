import { SAVE_COMMENT } from 'actions/comments/types'

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}
