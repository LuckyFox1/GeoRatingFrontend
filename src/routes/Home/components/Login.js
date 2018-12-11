import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Login.scss'

class Login extends Component {
  login = () => {
    this.props.loginUser(this.refs.name.value, this.refs.password.value)
  }

  register = () => {
    this.props.registerUser(this.refs.name.value, this.refs.password.value)
  }

  render () {
    const { login, home, showLogInForm } = this.props
    console.log(this.props)
    return <div className='overlay'>
      <div className='login-form-wrapper'>
        <button className='close-login-form' onClick={() => { showLogInForm(false) }} />
        <div className='login-form'>
          <div className='name-field'>
            <div className='message-box'>
              <span className='alert-message'>Login is invalid</span>
            </div>
            <label className='name-label'>Username: </label>
            <input className='name-input' ref='password' type='text' />
          </div>
          <div className='password-field'>
            <label className='password-label'>Password: </label>
            <input className='password-input' ref='name' type='text' />
          </div>
        </div>
        <button className='btn' onClick={this.login}>Sing In</button>
        <button className='btn' onClick={this.register}>Register</button>
      </div>
    </div>
  }
}

Login.propTypes = {
  login: PropTypes.object,
  home: PropTypes.object,
  loginUser: PropTypes.func,
  registerUser: PropTypes.func,
  showLogInForm: PropTypes.func
}

export default Login
