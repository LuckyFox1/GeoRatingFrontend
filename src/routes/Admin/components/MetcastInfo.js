import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Admin.scss'

export class MetcastInfo extends Component {
  render () {
    const { item, toggleEditForm, remove } = this.props
    return <div className='left-col'>
      <div className='logo'>
        <img src={item.images} alt={item.name} />
      </div>
      <div><b>Name: </b>{item.name}</div>
      <div><b>Link: </b><a className='link' href={`//${item.url}`}>{item.url}</a></div>
      <button className='btn edit-btn' onClick={() => toggleEditForm(item._id, true)}>Edit</button>
      <button className='btn remove-btn' onClick={() => remove(item._id)}>Remove</button>
    </div>
  }
}

MetcastInfo.propTypes = {
  item: PropTypes.object,
  toggleEditForm: PropTypes.func,
  remove: PropTypes.func
}

export default MetcastInfo
