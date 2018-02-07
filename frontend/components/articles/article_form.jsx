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
    const text = "Create Article"
    console.log(this);
    // if(currentUser) {
      return (
        <div>


          <form className="create-article-form" onSubmit={this.handleSubmit}>
            <h3 className="new-or-edit-title">{text}</h3>
              <label>
                <input
                  type="text"
                  className="create-input-title"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title" />
              </label>

              <label>
                <textarea
                  rows="10"
                  cols="75"
                  value={this.state.body}
                  className="create-input-body-and-image"
                  onChange={this.update('body')}
                  placeholder="Body" />
              </label>

              <label>
                <textarea
                  rows="2"
                  cols="75"
                  value={this.state.cover_img_url}
                  className="create-input-body-and-image"
                  onChange={this.update('cover_img_url')}
                  placeholder="Image URL" />
              </label>

              <input type="submit" className="create-article-button" value={text} />
          </form>
        </div>
      )

  }
}

export default ArticleForm
