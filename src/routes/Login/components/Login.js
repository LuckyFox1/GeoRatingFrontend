import React, { Component } from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'
import Header from '../../../layouts/Header'

class Login extends Component {
  login = () => {
    this.props.loginUser(this.refs.name.value, this.refs.password.value)
  }

  register = () => {
    this.props.registerUser(this.refs.name.value, this.refs.password.value)
  }

  render () {
    const { login, home } = this.props
    console.log(this.props)
    return <div>
      <Header />
      <div className='login-from'>
        <div className='name-field'>
          <label className='name-label'>Username: </label>
          <input className='name-input' ref='password' type='text' />
        </div>
        <div className='name-field'>
          <label className='password-label'>Password: </label>
          <input className='password-input' ref='name' type='text' />
        </div>
      </div>
      <button className='btn' onClick={this.login}>Sing In</button>
      <button className='btn' onClick={this.register}>Register</button>
    </div>
  }
}

Login.propTypes = {
  login: PropTypes.object,
  home: PropTypes.object,
  loginUser: PropTypes.func,
  registerUser: PropTypes.func
}

export default Login
