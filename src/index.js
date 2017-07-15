import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Page from './components/Page'

import store from './redux/store'

import './style.styl'

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('app')
)
