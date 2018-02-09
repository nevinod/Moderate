import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, deleteComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  // comments: Object.values(state.entities.comments)
})

const mapDispatchToProps = dispatch => ({
  fetchComments: (articleId) => dispatch(fetchComments(articleId)),
  deleteComment: articleId => dispatch(deleteArticle(articleId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
