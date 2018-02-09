import React from 'react';
import { Link } from 'react-router-dom';
import { fetchArticle } from '../../actions/article_actions'
import CommentFormContainer from './comment_form_container'
import CommentIndexItem from './comment_index_item'

const commentList = (comments = []) => (
    comments.map(comment => (
      <CommentIndexItem
        key={comment.id}
        body={comment.body}
      />
    ))
)


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
            <Link className="link-to-index" to="/articles">Back to all articles</Link>
          </div>

          <img className="show-image" src={article.cover_img_url}></img>
          <p className="show-title">{article.title}</p>
          <p className="show-body">{article.body}</p>
          <div className="comments-list">
            {commentList(article.comments)}
          </div>
          <CommentFormContainer className='comment-form'/>
        </div>
      );
    }
    else {
      return ( <div></div>)
    }
  }
}

export default ArticleShow;
