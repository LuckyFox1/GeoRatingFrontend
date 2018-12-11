import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HomeView.scss'
import Header from '../../../layouts/Header'

export class Home extends Component {
  componentDidMount () {
    this.props.getMetcasts()
  }

  render () {
    const { home } = this.props
    return <div>
      <Header />
      <ul className='metcasts-list'>
        {
          home.metcasts.map(item => {
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
                </div>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  }
}

Home.propTypes = {
  getMetcasts: PropTypes.func,
  home: PropTypes.object
}

export default Home
