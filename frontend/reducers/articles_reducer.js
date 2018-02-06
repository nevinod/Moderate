import { RECEIVE_ARTICLES} from '../actions/article_actions'
import { RECEIVE_ARTICLE } from '../actions/article_actions'
import { REMOVE_ARTICLE } from '../actions/article_actions'
import merge from 'lodash/merge'


const articlesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARTICLES:
      return action.articles
    case RECEIVE_ARTICLE:
      return merge({}, state, {[action.article.id]: action.article})
    case REMOVE_ARTICLE:
      let newState = merge({}, state)
      delete newState[action.article.articleId]
      return newState
    default:
      return state
  }
};

export default articlesReducer
