import { combineReducers } from 'redux';

import articlesReducer from './articles_reducer';

export default combineReducers({
  articles: articlesReducer
});
