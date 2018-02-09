import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CommentForm from './comment_form'
import { fetchComments, createComment } from '../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => ({
  comment: { title: "", body: "" },
  articles: Object.values(state.entities.articles),
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createComment: (comment, articleId) => dispatch(createComment(comment, articleId))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)
