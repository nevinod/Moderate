import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../actions/session_actions';
import ArticleIndex from './article_index'

const mapStateToProps = state => (
  {currentUser: state.session.currentUser}
)

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleIndex)
