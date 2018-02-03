import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,.65)'
  },
  content : {
    position: 'abolute',
    height: '50%',
    width: '40%',
    marginLeft: '30%',
    marginTop: '10%',
    border: '0',
    background: '#E8F3EC',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '5px',
    outline: 'none',
    boxShadow: '0 10px 16px rgba(0,0,0,.35)',

  }
};

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      modalIsOpen: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createNewUser({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password })
      .then(() => this.props.history.push('/articles'))
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push('/')
  }

  render() {
    return (
      <div className = "session_form">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Another Modal"
          className="animated fadeIn"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}></h2>
          <button className="x-button" onClick={this.closeModal}>&times;</button>
          <h3 className="signup-signin-header">Join Medium</h3>
            <form className="credential-form">
              <label class="input-title">Username
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInput('username')}
                  class="signin-login-input-box"
                />
              </label>

              <label class="input-title">Email
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                  class="signin-login-input-box"
                />
              </label>

              <label class="input-title">Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                  class="signin-login-input-box"
                />
              </label>
              <button className="submit-signin-signup-button" onClick={this.handleSubmit}>Create Account</button>
            </form>
        </Modal>
      </div>
    )
  }
}

export default Signup
