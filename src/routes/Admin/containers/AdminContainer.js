import { connect } from 'react-redux'

import Admin from '../components/Admin'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  admin : state.admin
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
