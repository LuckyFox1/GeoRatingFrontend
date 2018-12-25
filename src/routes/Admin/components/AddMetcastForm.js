import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Admin.scss'

export class AddMetcastForm extends Component {
  _handleAddMetcast = () => {
    this.props.addMetcast({
      name: this.refs.addName.value,
      url: this.refs.addUrl.value,
      images: this.refs.addImage.value
    })
  }

  render () {
    const { changeTab } = this.props
    return <div className='add-metcast-form'>
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
}

AddMetcastForm.propTypes = {
  addMetcast: PropTypes.func,
  changeTab: PropTypes.func
}

export default AddMetcastForm
