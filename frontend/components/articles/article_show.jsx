import React from 'react';
import { Link } from 'react-router-dom';
import { fetchArticle } from '../../actions/article_actions'

class ArticleShow extends React.Component {
  componentDidMount() {
    if (!this.props.article) {
      this.props.fetchArticle(this.props.match.params.articleId)
    }
  }

  render()  {
    const article = this.props.article
    if (this.props.article) {
      return (
        <div className="show-page">
          <div className="show-buttons">
            <Link className="link-to-index" to="/">See all articles</Link>
            <button className="like-article" onClick={() => deleteArticle(article.id)}>Like</button>
          </div>

          <img className="show-image" src={article.cover_img_url}></img>
          <p className="show-title">{article.title}</p>
          <p className="show-body">{article.body}</p>
        </div>
      );
    }
    else {
      return ( <div></div>)
    }
  }
}

export default ArticleShow;
