import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../actions/session_actions';
import Home from './home'
import { fetchArticles } from '../../actions/article_actions';

const mapStateToProps = state => ({
  articles: Object.values(state.entities.articles),
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  fetchArticles: () => dispatch(fetchArticles())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
