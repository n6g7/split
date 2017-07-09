import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const currencies = {
  'EUR': {
    divisor: 100,
    suffix: '€'
  },
  'GBP': {
    divisor: 100,
    prefix: '£'
  }
}

class Amount extends PureComponent {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
  }

  render () {
    let {
      amount,
      currency
    } = this.props

    currency = currencies[currency]
    amount /= currency.divisor

    return <span>
      { currency.prefix }
      { (-amount).toFixed(2) }
      { currency.suffix }
    </span>
  }
}

export default Amount
