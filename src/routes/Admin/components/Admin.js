import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../../layouts/Header'
import './Admin.scss'

class Admin extends Component {
  componentDidMount () {
    this.props.getMetcastsForAdmin()
  }

  _handleAddMetcast = () => {
    console.log(this.refs.addName.value)
    console.log(this.refs.addUrl.value)
    console.log(this.refs.addImage.value)
  }

  render () {
    const { home, signOut, admin, toggleEditForm, changeTab } = this.props
    return <div className='admin'>
      <Header user={home.user} signOut={signOut} />
      {
        admin.tab === 'metcasts-list'
      ? <div>
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
                  <button className='btn edit-btn' onClick={() => toggleEditForm(item._id, true)}>Edit</button>
                  <button className='btn remove-btn'>Remove</button>
                </div>
                <div className='right-col'>
                  {
                    item.editing
                    ? <div className='edit-form'>
                      <div>
                        <label className='lbl'><b>Name: </b></label>
                        <input ref='editName' className='form-control form-control-sm' defaultValue={item.name}/>
                      </div>
                      <div>
                        <label className='lbl'><b>Url: </b></label>
                        <input ref='editUrl' className='form-control form-control-sm' defaultValue={item.url} />
                      </div>
                      <div>
                        <label className='lbl'><b>Image: </b></label>
                        <input ref='editImage' className='form-control form-control-sm' defaultValue={item.images} />
                      </div>
                      <button className='btn btn-sm save-btn'>Save</button>
                      <button className='btn btn-sm cancel-btn' onClick={() => toggleEditForm(item._id, false)}>
                        Cancel
                      </button>
                    </div> : ''
                  }
                </div>
              </li>
            }) : ''
          }
        </ul>
        <button className='btn add-btn' onClick={() => changeTab('add-metcast')}>Add Metcast</button>
      </div>
      : <div className='add-metcast-form'>
        <div>
          <label className='lbl'><b>Name: </b></label>
          <input ref='addName' className='form-control' />
        </div>
        <div>
          <label className='lbl'><b>Url: </b></label>
          <input ref='addUrl' className='form-control' />
        </div>
        <div>
          <label className='lbl'><b>Image: </b></label>
          <input ref='addImage' className='form-control' />
        </div>
        <button className='btn save-btn' onClick={this._handleAddMetcast}>Add</button>
        <button className='btn cancel-btn' onClick={() => changeTab('metcasts-list')}>Cancel</button>
      </div>
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
  changeTab: PropTypes.func
}

export default Admin
