import { connect } from 'react-redux'
import { getMetcasts } from '../actions'

import Home from '../components/Home'

const mapDispatchToProps = {
  getMetcasts
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
