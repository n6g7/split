import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Image, List } from 'semantic-ui-react'

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

    return <List.Item>
      <Image avatar src={merchant ? merchant.logo : ''} />
      <List.Content>
        <List.Header>{merchant ? merchant.name : description}</List.Header>
        <List.Description>{created.format('LLLL')}</List.Description>
      </List.Content>
      <List.Content floated='right'>
        <List.Description>
          <Amount amount={amount} currency={currency} />
        </List.Description>
      </List.Content>
    </List.Item>
  }
}

export default Transaction
