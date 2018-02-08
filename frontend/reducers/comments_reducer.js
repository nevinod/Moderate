import { RECEIVE_COMMENTS } from '../actions/comment_actions'
import { REMOVE_COMMENT } from '../actions/comment_actions'
import merge from 'lodash/merge'

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    case REMOVE_COMMENT:
      let newState = merge({}, state)
      delete newState[action.comment.commentId]
      return newState
    default:
      return state
  }
}

export default commentsReducer
