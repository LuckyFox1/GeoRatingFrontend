import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'

export class Header extends Component {
  _handleSignIn = () => {
    if (this.props.showLogInForm) {
      this.props.showLogInForm(true)
    }
  }

  render () {
    const { loggedIn } = this.props
    return <div className='header'>
      <div className='wrapper'>
        <IndexLink to='/' activeClassName='active' className='nav-item home' />
        <div className='title'>Top weather forecasts</div>
        {!loggedIn
          ? <Link
            to='#'
            activeClassName='active'
            className='nav-item log-in'
            onClick={this._handleSignIn}
          >Sign In</Link> : ''}
        {loggedIn ? <Link to='/admin' activeClassName='active' className='nav-item admin'>Admin</Link> : ''}
      </div>
    </div>
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool
}

export default Header
