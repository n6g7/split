import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Page from './page'

import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('app')
)
