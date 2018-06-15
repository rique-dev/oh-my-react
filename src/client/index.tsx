import { React, render, AppContainer /* reactDeepForceUpdate */ } from '@lib'
import App from './App'

const rootEl = document.getElementById('root')

const renderReactApp = () => render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl,
)
renderReactApp()

if (module.hot) {
  module.hot.accept('./App', () => {
    // reactDeepForceUpdate(renderReactApp())
    renderReactApp()
  })
}
