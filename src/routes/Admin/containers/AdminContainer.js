import { connect } from 'react-redux'
import { signOut } from '../../Home/actions'
import { getMetcastsForAdmin, toggleEditForm, addMetcast, changeTab, editMetcast, remove } from '../actions'

import Admin from '../components/Admin'

const mapDispatchToProps = {
  signOut,
  getMetcastsForAdmin,
  toggleEditForm,
  addMetcast,
  changeTab,
  editMetcast,
  remove
}

const mapStateToProps = (state) => ({
  home : state.home,
  admin : state.admin
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
