import React from 'react'
import { connect } from 'react-redux'
import { fetchArticle } from '../../actions/article_actions'
import ArticleShow from './article_show'
import { likeArticle } from '../../actions/article_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    article: state.entities.articles[ownProps.match.params.articleId]
  }
};

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle(id)),
  likeArticle: id => dispatch(likeArticle(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleShow);
