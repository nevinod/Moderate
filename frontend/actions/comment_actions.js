import * as APIUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
})

export const fetchComments = () => dispatch => (
  APIUtil.fetchComments().then(comments => dispatch(receiveComments(comments)))
)

export const createComment = (comment, articleId) => dispatch => (
  APIUtil.createComment(comment, articleId).then(comment => dispatch(receiveComment(comment)))
)

export const deleteComment = id => dispatch => (
  APIUtil.delteComment(id).then(commentId => dispatch(removeComment(commentId)))
)
