import { connect } from 'react-redux'
import { fetchArticle } from '../../actions/article_actions'
import ArticleShow from './article_show'

const mapStateToProps = state => ({
  article: state.articles[ownProps.match.params.articleId]
});

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleShow);
