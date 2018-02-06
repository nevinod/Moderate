
export const fetchArticles = () => {
  return $.ajax({
    method: "GET",
    url: "api/articles"
  })
}


export const updateArticle = (article) => {
  return $.ajax({
    method: "PATCH",
    url: `api/articles/${article.id}`,
    data: { article }
  })
}


export const deleteArticles = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/articles/${id}`
  })
}

export const createArticle = (article) => {
  return $.ajax({
    method: "POST",
    url: "api/articles/",
    data: { article }
  })
}


export const fetchArticle = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/articles/${id}`
  })
}
