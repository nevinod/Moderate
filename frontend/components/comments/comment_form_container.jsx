import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CommentForm from './comment_form'
import { fetchComments, createComment } from '../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => {
  let comment = { title: "", body: "" }
  return { comment };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const actions = createComment
  return {
    createComment: comment => dispatch(createComment(comment)),
    action: comment => dispatch(action(comment))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)
