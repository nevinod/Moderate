import React from 'react'
import Modal from 'react-modal'
import { Link, withRouter } from 'react-router-dom';

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
    height: '60%',
    width: '40%',
    marginLeft: '30%',
    marginTop: '10%',
    border: '0',
    background: '#D7EFEE',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '5px',
    outline: 'none',
    boxShadow: '0 10px 16px rgba(0,0,0,.35)',

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
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.signIn(this.state)
      .then(() => this.props.history.push('/articles') )
  }

  demoLogin(e) {
    e.preventDefault()
    this.props.signIn({username: "demo", password: "123456"})
      .then(() => this.props.history.push('/articles'))
  }

  componentWillMount() {
      Modal.setAppElement('body');
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

  componentDidMount(){
    Modal.setAppElement('#root');
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  renderErrors() {
    if(this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }



  render() {
    return (
      <div className="modal-div">
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
            <h3 className="signup-signin-header">Sign in</h3>
            <div className='error-render'>
              {this.renderErrors()}
            </div>

              <form className = "credential-form">
                <label className="input-title" >Username
                  <div className="wrapper">
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleInput('username')}
                      className="signin-login-input-box"
                    />
                  <span className="underline"></span>
                  </div>
                </label>

                <label className="input-title">Password
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput('password')}
                    className="signin-login-input-box"
                  />
                </label>
                <button className="submit-signin-signup-button" onClick={this.handleSubmit} >Login</button>
                <button className="submit-signin-signup-button" onClick={this.demoLogin}>Demo Login</button>
              </form>
          </Modal>


      </div>
    )
  }
}

export default withRouter(Signin)
