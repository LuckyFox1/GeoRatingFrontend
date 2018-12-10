import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

export class Header extends Component {
  render () {
    return <div className='header'>
      <div className='wrapper'>
        <IndexLink to='/' activeClassName='active' className='nav-item home' />
        <div className='title'>Top weather forecasts</div>
        <Link to='/login' activeClassName='active' className='nav-item log-in'>Log In</Link>
        <Link to='/admin' activeClassName='active' className='nav-item admin'>Admin</Link>
      </div>
    </div>
  }
}

export default Header
