import React from 'react'
import ArticleIndexItem from './article_index_item';


class ArticleIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    if(this.props.currentUser) {
      return (
          <div className="article-index-temp">
            <h1>This is the articles show page when logged in</h1>
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
          <Link to="/articles/new">Form</Link>
        </div>
      )
    }
  }
}

export default ArticleIndex
