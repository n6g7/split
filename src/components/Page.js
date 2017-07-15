import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Sidebar from './Sidebar'
import Transaction from './Transaction'

class Page extends PureComponent {
  static propTypes = {
    transactions: PropTypes.array.isRequired
  }

  render () {
    const { transactions } = this.props

    return <main>
      <Sidebar />

      <ol>
        {transactions.map(transaction =>
          <Transaction
            key={transaction.key}
            transaction={transaction}
          />
        )}
      </ol>
    </main>
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions.list
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
