import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../../layouts/Header'
import './Admin.scss'

class Admin extends Component {
  componentDidMount () {
    this.props.getMetcastsForAdmin()
  }

  render () {
    const { home, signOut, admin } = this.props
    return <div>
      <Header user={home.user} signOut={signOut} />
      <div>
        <ul className='metcasts-list-admin list-group'>
          {
            admin.metcasts ? admin.metcasts.map(item => {
              return <li key={item._id} className='list-group-item'>
                <div className='left-col'>
                  <div className='logo'>
                    <img src={item.images} alt={item.name} />
                  </div>
                  <div><b>Name: </b>{item.name}</div>
                  <div><b>Link: </b>{item.url}</div>
                  <button className='btn edit-btn'>Edit</button>
                  <button className='btn remove-btn'>Remove</button>
                </div>
                <div className='right-col'>
                  <div className='edit-form'>
                    <div>
                      <label className='lbl'><b>Name: </b></label>
                      <input ref='editName' className='form-control form-control-sm' />
                    </div>
                    <div>
                      <label className='lbl'><b>Url: </b></label>
                      <input ref='editUrl' className='form-control form-control-sm' />
                    </div>
                    <div>
                      <label className='lbl'><b>Image: </b></label>
                      <input ref='editImage' className='form-control form-control-sm' />
                    </div>
                    <button className='btn btn-sm save-btn'>Save</button>
                  </div>
                </div>
              </li>
            }) : ''
          }
        </ul>
        <button className='btn add-btn'>Add Metcast</button>
      </div>
    </div>
  }
}

Admin.propTypes = {
  home: PropTypes.object,
  signOut: PropTypes.func,
  getMetcastsForAdmin: PropTypes.func,
  admin: PropTypes.object
}

export default Admin
