import { connect } from 'react-redux'
import { createNewUser, receiveErrors } from '../../actions/session_actions'
import Signup from './signup'

const mapStateToProps = state => ({
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(receiveErrors([]))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
