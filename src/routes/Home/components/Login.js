import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Login.scss'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false,
      message: ''
    }
  }

  login = () => {
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ user: { name: this.refs.name.value, password: this.refs.password.value } }),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(data => {
        if (data.user) {
          this.props.setUser(data.user)
          this.setState({ error: false, message: '' })
          this.props.showLogInForm(false)
        } else {
          this.setState({ error: true, message: 'Username or password is invalid.' })
        }
      }).catch(error => {
        console.log(error)
      })
  }

  register = () => {
    fetch('/register', {
      method: 'POST',
      body: JSON.stringify({ user: { name: this.refs.name.value, password: this.refs.password.value } }),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(data => {
        if (data.user) {
          this.setState({ error: false, message: 'Account was successfully created' })
          this.refs.name.value = ''
          this.refs.password.value = ''
        } else {
          this.setState({ error: true, message: data.message })
        }
      }).catch(error => {
        console.log(error)
      })
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
              {this.state.error ? <span className='alert-message'>{this.state.message}</span> : ''}
              {!this.state.error && this.state.message.length
                ? <span className='success-message'>{this.state.message}</span> : ''}
            </div>
            <label className='name-label'>Username: </label>
            <input className='name-input' ref='name' type='text' />
          </div>
          <div className='password-field'>
            <label className='password-label'>Password: </label>
            <input className='password-input' ref='password' type='text' />
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
  setUser: PropTypes.func,
  registerUser: PropTypes.func,
  showLogInForm: PropTypes.func
}

export default Login
