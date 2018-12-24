import { connect } from 'react-redux'
import { signOut } from '../../Home/actions'
import { getMetcastsForAdmin } from '../actions'

import Admin from '../components/Admin'

const mapDispatchToProps = {
  signOut,
  getMetcastsForAdmin
}

const mapStateToProps = (state) => ({
  home : state.home,
  admin : state.admin
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
