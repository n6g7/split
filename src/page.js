import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { login } from '@actions/user'

class Page extends PureComponent {
  render () {
    return <button onClick={this.props.login}>Login</button>
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
