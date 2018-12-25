import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Admin.scss'

export class EditForm extends Component {
  _handleEditMetcast = (ID) => {
    this.props.editMetcast({
      name: this.refs.editName.value,
      url: this.refs.editUrl.value,
      images: this.refs.editImage.value
    }, ID)
  }

  render () {
    const { item, toggleEditForm } = this.props
    return <div className='edit-form'>
      <div>
        <label className='lbl'><b>Name: </b></label>
        <input ref='editName' className='form-control form-control-sm' defaultValue={item.name} />
      </div>
      <div>
        <label className='lbl'><b>Url: </b></label>
        <input ref='editUrl' className='form-control form-control-sm' defaultValue={item.url} />
      </div>
      <div>
        <label className='lbl'><b>Image: </b></label>
        <input ref='editImage' className='form-control form-control-sm' defaultValue={item.images} />
      </div>
      <button className='btn btn-sm save-btn' onClick={() => this._handleEditMetcast(item._id)}>Save</button>
      <button className='btn btn-sm cancel-btn' onClick={() => toggleEditForm(item._id, false)}>Cancel</button>
    </div>
  }
}

EditForm.propTypes = {
  item: PropTypes.object,
  editMetcast: PropTypes.func,
  toggleEditForm: PropTypes.func
}

export default EditForm
