import { connect } from 'react-redux'
import { createNewUser, receiveErrors } from '../../actions/session_actions'
import Signup from './signup'

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
})

export default connect(
  null,
  mapDispatchToProps
)(Signup)
