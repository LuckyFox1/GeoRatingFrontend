import { connect } from 'react-redux'
import { loginUser, registerUser } from '../actions'
import Login from '../components/Login'

const mapDispatchToProps = {
  loginUser,
  registerUser
}

const mapStateToProps = (state) => ({
  login : state.login,
  home : state.home
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
