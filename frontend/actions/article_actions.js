import * as APIUtil from '../util/article_api_util'

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES"
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE"
export const REMOVE_ARTICLE = "REMOVE_ARTICLE"

export const receiveArticles = articles => ({
  type: RECEIVE_ARTICLES,
  articles
})

export const receiveArticle = article => ({
  type: RECEIVE_ARTICLE,
  article
})

export const removeArticle = articleId => ({
  type: REMOVE_ARTICLE,
  articleId
})

export const fetchArticles = () => dispatch => (
  APIUtil.fetchArticles().then(articles => (dispatch(receiveArticles(articles))))
);

export const fetchArticle = (id) => dispatch => (
  APIUtil.fetchArticle(id).then(article => (dispatch(receiveArticle(article))))
);

export const updateArticle = article => dispatch => (
  APIUtil.updateArticle(article).then(article => (dispatch(receiveArticle(article))))
)

export const createArticle = (article) => dispatch => (
  APIUtil.createArticle(article).then(article => (dispatch(receiveArticle(article))))
);

export const deleteArticle = id => dispatch => (
  APIUtil.deleteArticle(id).then(articleId => (dispatch(removeArticle(articleId))))
);
