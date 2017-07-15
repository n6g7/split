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

    amount *= -1
    amount /= currency.divisor

    const [ bucks, cents ] = amount.toFixed(2).split('.')

    return <span className='amount'>
      {currency.prefix && <span className='currency'>{ currency.prefix }</span>}
      <span className='bucks'>{ bucks }</span>.{cents}
      {currency.suffix && <span className='currency'>{ currency.suffix }</span>}
    </span>
  }
}

export default Amount
