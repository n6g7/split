import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login } from '@actions/user'

class Page extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired
  }

  render () {
    return <button onClick={this.props.login}>Login</button>
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
