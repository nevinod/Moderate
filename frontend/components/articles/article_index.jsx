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
                    article={article}
                    blurb={article.body.split(/\s+/).slice(0,20).join(" ")}/>
                ))
              }
            </ul>
          </div>
        </div>
      )

    } else {

      this.props.history.push('/')
      return (
        <div className="article-index-temp"></div>
      )
    }
  }
}

export default ArticleIndex
