import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let temp = this.props.articles
    this.props.createComment(this.state, this.props.articles[0].id).then((arg) => this.props.history.push(`/articles/${arg.article.id}`))
  }

  render() {
    const text = "Add!"
    if(this.props.currentUser) {
      return (
        <div>
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                className="comment-input"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder="Add Comment" />
            </label>

            <input type="submit" className="add-comment-button" value={text} />
          </form>
        </div>
      )
    } else {
      return ( <div className="comment-form">Sign in to leave a comment</div>)
    }
  }
}

export default CommentForm
