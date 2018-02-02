import React from 'react'
import ReactDOM from 'react-dom'
import * as SessionUtil from './util/session_api_util'
import Root from './components/root'
import configureStore from './store/store'


document.addEventListener("DOMContentLoaded", () => {
  window.login = SessionUtil.login
  window.signup = SessionUtil.signup
  window.logout = SessionUtil.logout
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root")
  ReactDOM.render(<Root store={store}/>, root)
})
