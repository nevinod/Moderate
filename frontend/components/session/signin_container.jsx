import { connect } from 'react-redux'
import { signIn, receiveErrors } from '../../actions/session_actions'
import Signin from './signin'

const mapStateToProps = (state) => ({
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signIn: formUser => dispatch(signIn(formUser))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)
