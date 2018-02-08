import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = this.props.comment
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.comment)
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.action(this.state).then((arg) => this.props.history.push(`/articles/${arg.article.id}`))
  }

  render() {
    const text = "Add Comment"
    return (
      <div>
        <form className="comment-form" pmSubmit={this.handleSubmit}>
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
  }
}

export default CommentForm
