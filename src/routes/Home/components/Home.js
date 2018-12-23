import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HomeView.scss'
import Header from '../../../layouts/Header'
import Login from './Login'
import Metcast from './Metcast'

export class Home extends Component {
  componentDidMount () {
    this.props.getMetcasts()
  }

  render () {
    const { home, setUser, signOut, vote, removeVote } = this.props
    return <div>
      <Header user={home.user} signOut={signOut} showLogInForm={this.props.showLogInForm} />
      <ul className='metcasts-list'>
        {
          home.metcasts.map(item => {
            return <Metcast key={item._id} item={item} vote={vote} removeVote={removeVote} user={home.user} />
          })
        }
      </ul>
      {
        home.showLoginForm
        ? <Login
          showLogInForm={this.props.showLogInForm}
          loginUser={this.props.loginUser}
          registerUser={this.props.registerUser}
          setUser={setUser}
          /> : ''
      }
    </div>
  }
}

Home.propTypes = {
  getMetcasts: PropTypes.func,
  home: PropTypes.object,
  showLogInForm: PropTypes.func,
  loginUser: PropTypes.func,
  registerUser: PropTypes.func,
  setUser: PropTypes.func,
  signOut: PropTypes.func,
  vote: PropTypes.func,
  removeVote: PropTypes.func
}

export default Home
