import React from 'react'
import ArticleIndexItem from './article_index_item';
import { Link } from 'react-router-dom';

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    // this.props.articles = this.props.fetchArticles();
    if(this.props.currentUser) {
      return (
        <div>

          <div className="container-container">
            <div className="article-index-temp">
              <h1>Recommended for You</h1>
              <br></br>
            </div>
            <Link className="new-article-button" to="/articles/new">Write an Article!</Link>
            <ul className="container">
              {
                this.props.articles.map(article => (
                  <ArticleIndexItem
                    key={article.id}
                    deleteArticle={this.props.deleteArticle}
                    article={article} />
                ))
              }
            </ul>
          </div>
        </div>
      )

    } else {

      this.props.history.push('/')
      return (
        <div className="article-index-temp">
          <ul>
            {
              this.props.articles.map(article => (
                <ArticleIndexItem
                  key={article.id}
                  deleteArticle={this.props.deleteArticle}
                  article={article} />
              ))
            }
          </ul>
          <Link  to="/articles/new">Form</Link>
        </div>
      )
    }
  }
}

export default ArticleIndex
