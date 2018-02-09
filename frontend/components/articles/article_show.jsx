import React from 'react';
import { Link } from 'react-router-dom';
import { fetchArticle } from '../../actions/article_actions'
import CommentFormContainer from './comment_form_container'
import CommentIndexContainer from './comment_index_container'
import CommentIndexItem from './comment_index_item'
import CommentIndex from './comment_index'

const commentList = (comments = []) => (
    comments.map(comment => (
      <CommentIndexItem
        key={comment.id}
        body={comment.body}
      />
    ))
)


class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let articleId = this.props.match.params.articleId;
    if (!this.props.article) {
      this.props.fetchArticle(this.props.match.params.articleId).then(() => (
        this.props.fetchComments(articleId)
      ))

    }
  }

  render()  {

    const article = this.props.article
    if(article === undefined) {
      return null
    }
    const body = this.props.article.body.split("\n").map(
      (line, idx) => <div key={line + idx}><p className="show-body">{line}</p><br /></div>
    )
    // debugger
    if (this.props.currentUser) {
      return (
        <div className="show-page">
          <div className="show-buttons">
            <Link className="link-to-index" to="/articles">Back to all articles</Link>
          </div>

          <img className="show-image" src={article.cover_img_url}></img>
          <p className="show-title">{article.title}</p>
          {body}
          <div className="comments-list">
          <CommentIndexContainer comments={this.props.comments} />
          </div>
          <CommentFormContainer className='comment-form'username={this.props.currentUser.username} />
        </div>
      );
    }
    else {
      const article = this.props.article
      console.log(this.props);
      return (
        <div className="show-page">
          <div className="show-buttons">
            <Link className="link-to-index" to="/articles">Back to all articles</Link>
          </div>

          <img className="show-image" src={article.cover_img_url}></img>
          <p className="show-title">{article.title}</p>
          <p className="show-body">{article.body}</p>
          <div className="comments-list">
            <CommentIndexContainer comments={this.props.comments} />
          </div>
        </div>
      )
    }
  }
}

export default ArticleShow;
