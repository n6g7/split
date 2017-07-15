import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { authorize } from '@actions/splitwise'
import { login } from '@actions/user'

class Sidebar extends PureComponent {
  static propTypes = {
    authorize: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
  }

  render () {
    return <aside>
      <h1>Split</h1>

      <p>Send your Monzo spendings on Splitwise in one click!</p>

      <nav>
        <button className='basic' onClick={this.props.login}>Login</button>
        <button className='basic' onClick={this.props.authorize}>Login to splitwise</button>
      </nav>
    </aside>
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  authorize,
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
