
export const fetchComments = () => {
  return $.ajax({
    method: "GET",
    url: `api/articles/${articleId}/comments`
  })
}

export const createComment = (comment, articleId) => {
  return $.ajax({
    method: "POST",
    url: `api/articles/${articleId}/comments`,
    data: { comment, articleId }
  })
}

export const deleteComment = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/articles/${articleId}/comments/${id}`
  })
}
