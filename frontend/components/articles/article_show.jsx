import React from 'react';
import { Link } from 'react-router-dom';
import { fetchArticle } from '../../actions/article_actions'

class ArticleShow extends React.Component {
  componentDidMount() {
    if (this.props.article) {
      this.props.fetchArticle(this.props.article.id)
    }
  }

  render(){
    return (
      <div></div>
    )
    const article = this.props.article
    return(
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <Link to="/">See all articles</Link>

      </div>
    );
  }
}

export default ArticleShow;
