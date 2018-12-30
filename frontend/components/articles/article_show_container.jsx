import React from 'react'
import { connect } from 'react-redux'
import { fetchArticle } from '../../actions/article_actions'
import ArticleShow from './article_show'
import { likeArticle } from '../../actions/article_actions'
import { fetchComments } from '../../actions/comment_actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    article: state.entities.articles[ownProps.match.params.articleId],
    comments: Object.values(state.entities.comments),
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle(id)),
  likeArticle: id => dispatch(likeArticle(id)),
  fetchComments: articleId => dispatch(fetchComments(articleId))

});



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleShow));
