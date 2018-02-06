import React from 'react'
import { connect } from 'react-redux'
import { fetchArticles, deleteArticles } from '../../actions/article_actions'
import ArticleIndex from './article_index'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  articles: Object.values(state.articles)
})

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles()),
  deleteArticle: (articleId) => dispatch(deleteArticle(articleId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleIndex)
