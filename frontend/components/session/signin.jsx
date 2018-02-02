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
    position: 'absolute',
    top: '140px',
    bottom: '170px',
    left: '270px',
    right: '270px',
    margin: 'auto',
    border: '0',
    background: '#D7EFEE',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '5px',
    outline: 'none',
    boxShadow: '0 2px 10px rgba(0,0,0,.15)'
  }
};


class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      modalIsOpen: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  renderErrors() {
    return(
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))
        }
      </ul>
    )
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.signIn(this.state)
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
      <div >
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="animated fadeIn"
          >

            <h2 ref={subtitle => this.subtitle = subtitle}></h2>
            <button className="x-button" onClick={this.closeModal}>&times;</button>
            <h3 className="signup-login-header">Sign in with email</h3>

              <form className = "credential-form">
                {this.renderErrors()}
                <label class="input-title" >Username:
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInput('username')}
                    class="signin-login-input-box"
                  />
                </label>

                <label class="input-title">Password:
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput('password')}
                    class="signin-login-input-box"
                  />
                </label>
                <button className="submit-signin-signup-button" onClick={this.handleSubmit} >Login</button>
              </form>
          </Modal>


      </div>
    )
  }
}

export default Signin
