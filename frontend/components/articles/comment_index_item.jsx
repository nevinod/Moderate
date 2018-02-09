import React from 'react'
import { Link } from 'react-router-dom'

const CommentIndexItem = ({ comment, username }) => (
  <div className="comment">
    <h3 className="comment-username">{username}</h3>
    <h3 className="comment-body">{comment.body}</h3>
  </div>
)

export default CommentIndexItem
