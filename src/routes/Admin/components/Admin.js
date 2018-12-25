import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../../layouts/Header'
import EditFrom from './EditForm'
import AddMetcastForm from './AddMetcastForm'
import MetcastInfo from './MetcastInfo'
import './Admin.scss'

class Admin extends Component {
  componentDidMount () {
    this.props.getMetcastsForAdmin()
  }

  render () {
    const { home, signOut, admin, toggleEditForm, changeTab, remove, editMetcast, addMetcast } = this.props
    return <div className='admin'>
      <Header user={home.user} signOut={signOut} />
      {
        admin.tab === 'metcasts-list'
      ? <div>
        <ul className='metcasts-list-admin list-group'>
          {
            admin.metcasts ? admin.metcasts.map(item => {
              return <li key={item._id} className='list-group-item'>
                <MetcastInfo item={item} remove={remove} toggleEditForm={toggleEditForm} />
                <div className='right-col'>
                  {
                    item.editing
                    ? <EditFrom item={item} toggleEditForm={toggleEditForm} editMetcast={editMetcast} /> : ''
                  }
                </div>
              </li>
            }) : ''
          }
        </ul>
        <button className='btn add-btn' onClick={() => changeTab('add-metcast')}>Add Metcast</button>
      </div>
      : <AddMetcastForm changeTab={changeTab} addMetcast={addMetcast} />
      }
    </div>
  }
}

Admin.propTypes = {
  home: PropTypes.object,
  signOut: PropTypes.func,
  getMetcastsForAdmin: PropTypes.func,
  admin: PropTypes.object,
  toggleEditForm: PropTypes.func,
  changeTab: PropTypes.func,
  addMetcast: PropTypes.func,
  editMetcast: PropTypes.func,
  remove: PropTypes.func
}

export default Admin
