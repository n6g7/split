import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Amount from './Amount'

class Transaction extends PureComponent {
  static propTypes = {
    transaction: PropTypes.object.isRequired
  }

  render () {
    const {
      amount,
      created,
      currency,
      description,
      merchant
    } = this.props.transaction

    const title = merchant
      ? `${merchant.name} ${merchant.emoji}`
      : description

    return <li>
      <img src={merchant ? merchant.logo : ''} alt={title} />

      <div className='content'>
        <div className='title'>
          <h2>{title}</h2>
          <p>{created.format('LLLL')}</p>
        </div>

        <div className='pull'>
          <Amount amount={amount} currency={currency} />
          <button>Split</button>
        </div>
      </div>

    </li>
  }
}

export default Transaction
