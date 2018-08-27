import React from 'react'
import { Link } from 'react-router-dom'
import ArticleIndexItem from '../articles/article_index_item'


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    if(this.props.currentUser) {
      return (
        <div>
          <div className="home">
            <div className="all-header-elements">
              <h1 className="web-title">Moderate</h1>
              <div className="home-page-buttons">
                <button className="home-signup-button" onClick={this.props.signOut}>Leave</button>
              </div>
            </div>
            <div className="container-container">
              <div className="article-index-temp">
                <h1>What's Popular</h1>
                <br></br>
              </div>
              <div className="welcome">
                <div className="welcome-wtwo">
                  <h3 className="welcome-words-two">Welcome to</h3>
                  <h3 className="welcome-words-two">Moderate,</h3>
                  <h3 className="welcome-words-two">{this.props.currentUser.username}</h3>
                </div>
                <img className="welcome-image-loggedin" src="https://cdn-images-1.medium.com/max/500/1*7HPP-1kyq-BS-Df2x9KlNw.jpeg" />
              </div>
            </div>
          </div>
        </div>
      )

    } else {
      return (


        <div className="home">
          <div className="all-header-elements">
            <h1 className="web-title">Moderate</h1>
            <div className="home-page-buttons">
              <Link className="home-login-button" to='/login'>Sign In</Link>
              <Link className="home-signup-button" to='/signup'>Get started</Link>
            </div>
          </div>
          <div className="container-container">
            <div className="article-index-temp">
              <h1>What's Popular</h1>
              <br></br>
            </div>
            <div className="welcome">
              <div className="welcome-w">
                <h3 className="welcome-words">Welcome to Moderate,</h3>
                <h3 className="welcome-words-two">where words </h3>
                <h3 className="welcome-words-two">matter </h3>
              </div>
              <img className="welcome-image" src="https://cdn-images-1.medium.com/max/500/1*7HPP-1kyq-BS-Df2x9KlNw.jpeg" />
            </div>
            <Link className="new-article-button" to="/login">Sign in to Write an Article!</Link>

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
          <div className="bottom-part"></div>
        </div>
      )

    }

  }

}

export default Home;
