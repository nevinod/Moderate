import React from 'react'

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
        </div>
      )
    }
  }
}

export default ArticleIndex
