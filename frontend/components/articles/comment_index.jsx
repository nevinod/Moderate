import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    if (this.props.comments === undefined) return null;
    return (
      <div>
        {
          this.props.comments.map(comment => (
            <CommentIndexItem
              key={comment.id}
              comment={comment}
               username={this.props.username}/>
          ))
        }
      </div>
    )
  }
}

export default CommentIndex
