import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, List } from 'semantic-ui-react'

import { login } from '@actions/user'

import Transaction from './Transaction'

class Page extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
    transactions: PropTypes.array.isRequired
  }

  render () {
    const { transactions } = this.props

    return <Container text>
      <button onClick={this.props.login}>Login</button>

      <List divided selection verticalAlign='middle'>
        {transactions.map(transaction =>
          <Transaction
            key={transaction.key}
            transaction={transaction}
          />
        )}
      </List>
    </Container>
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions.list
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
