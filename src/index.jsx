import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App.jsx'
import './styles/main.css'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
