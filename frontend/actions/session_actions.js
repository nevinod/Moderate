import {
  signup,
  login,
  logout
} from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch => signup(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))

export const signIn = formUser => dispatch => login(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))

export const signOut = () => dispatch => logout()
  .then(() => dispatch(logoutCurrentUser()))
