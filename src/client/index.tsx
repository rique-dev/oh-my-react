import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import deepForceUpdate from 'react-deep-force-update'
import App from './App'

const rootEl = document.getElementById('root')

const renderReactApp = () => render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl,
)
renderReactApp()

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    deepForceUpdate(renderReactApp())
    // renderReactApp()
  })
}
