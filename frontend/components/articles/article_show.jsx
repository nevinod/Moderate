import React from 'react';
import { Link } from 'react-router-dom';

class ArticleShow extends React.Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.article.id)
  }

  render(){
    const event = this.props.article
    return(
      <div>
        <h1>{article.title}</h1>
        <h1>{article.body}</h1>
        <Link to="/">See all articles</Link>

      </div>
    );
  }
}

export default ArticleShow;
