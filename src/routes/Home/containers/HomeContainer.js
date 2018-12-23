import { connect } from 'react-redux'
import { getMetcasts, loginUser, registerUser, showLogInForm, setUser, signOut } from '../actions'

import Home from '../components/Home'

const mapDispatchToProps = {
  getMetcasts,
  loginUser,
  registerUser,
  showLogInForm,
  setUser,
  signOut
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
