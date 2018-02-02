import { connect } from 'react-redux'
import { signIn } from '../../actions/session_actions'
import Signin from './signin'

const mapDispatchToProps = dispatch => ({
  signIn: formUser => dispatch(signIn(formUser))
})

export default connect (
  null,
  mapDispatchToProps
)(Signin)
