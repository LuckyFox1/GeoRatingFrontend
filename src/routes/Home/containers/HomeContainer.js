import { connect } from 'react-redux'

import Home from '../components/Home'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
