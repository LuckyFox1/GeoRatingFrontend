import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HomeView.scss'

export class Metcast extends Component {
  render () {
    const { item, vote, user, removeVote } = this.props
    const cannotVote = user.likes.some(like => like.metcast_id === item._id)
    return <li className='metcast' key={item._id}>
      <div className='left-col'>
        <img className='icon' src={item.images} alt={item.name} />
      </div>
      <div className='right-col'>
        <div className='name'>{ item.name }</div>
        <a className='link' href={`//${item.url}`}>{item.url}</a>
        <div className='rating'>
          <div className='rating-icon' />
          <span className='rating-value'>{item.rating}</span>
          <div className='vote-block'>
            {
              !cannotVote
              ? <div className='btn-group mr-2'>
                <button type='button' className='btn' onClick={() => vote(1, item._id)}>1</button>
                <button type='button' className='btn' onClick={() => vote(2, item._id)}>2</button>
                <button type='button' className='btn' onClick={() => vote(3, item._id)}>3</button>
                <button type='button' className='btn' onClick={() => vote(4, item._id)}>4</button>
                <button type='button' className='btn' onClick={() => vote(5, item._id)}>5</button>
              </div>
              : <button className='btn remove-vote-btn' onClick={() => removeVote(item._id)}>Remove Vote</button>
            }
          </div>
        </div>
      </div>
    </li>
  }
}

Metcast.propTypes = {
  item: PropTypes.object,
  vote: PropTypes.func,
  user: PropTypes.object,
  removeVote: PropTypes.func
}

export default Metcast
