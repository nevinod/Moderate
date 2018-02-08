import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArticleForm from './article_form';
import { fetchArticle, createArticle, updateArticle } from '../../actions/article_actions';

const mapStateToProps = (state, ownProps) => {
  let article = { title: "", body: "" };
  // let formType = "new";
  return { article };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = createArticle;
  return {
    createArticle: article => dispatch(createArticle(article)),
    action: article => dispatch(action(article))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleForm));
