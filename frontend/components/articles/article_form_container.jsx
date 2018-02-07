import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArticleForm from './article_form';
import { fetchArticle, createArticle, updateArticle } from '../../actions/article_actions';

const mapStateToProps = (state, ownProps) => {
  let article = { title: "", body: "" };
  let formType = "new";
  if (ownProps.match.path == "/articles/:id/edit") {
    article = state.articles[ownProps.match.params.id];
    formType = "edit";
  }
  return { article, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "/" ? createArticle : updateArticle;
  return {
    fetchArticle: id => dispatch(fetchArticle(id)),
    action: article => dispatch(action(article))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleForm));
