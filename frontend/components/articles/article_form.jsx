import React from 'react'

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = this.props.article
  }

  componentDidMount() {
    if(this.props.match.params.id) {
      this.props.fetchArticle(this.props.match.params.id)
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.article)
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.action(this.state).then(() => this.props.history.push('/articles'))
  }

  render() {
    const text = this.props.formType === 'new' ? "Create Article" : "Update Article"
    // if(currentUser) {
      return (
        <div>

          <form className="create-article-form" onSubmit={this.handleSubmit}>
            <h3>{text}</h3>
            <label>Title
              <input
                type="text"
                className="create-input"
                value={this.state.title}
                onChange={this.update('title')} />
            </label>

            <label>Body
              <textarea
                value={this.state.body}
                className="create-input"
                onChange={this.update('body')} />
            </label>

            <label>URL of Image
              <textarea
                value={this.state.cover_img_url}
                className="create-input"
                onChange={this.update('cover_img_url')} />
            </label>

            <input type="submit" className="create-article-button" value={text} />
          </form>
        </div>
      )
    // } else {
    //   this.props.history.push('/')
    // }
  }
}

export default ArticleForm
