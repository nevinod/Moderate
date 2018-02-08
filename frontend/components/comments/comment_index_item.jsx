import React from 'react'
import { Link } from 'react-router-dom'

const CommentIndexItem = ({ comment }) => (
  <div>
    <h3>{comment.body}</h3>
  </div>
)

export default CommentIndexItem
