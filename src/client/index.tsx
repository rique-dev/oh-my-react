import { AppContainer, React, render /* reactDeepForceUpdate */ } from '@lib'
import { Bootstrap } from './containers/Bootstrap/Bootstrap'

// tslint:disable
import '@styles/global.scss'
import '@vendors'
// tslint:enable

const rootEl = document.getElementById('root')

const renderReactApp = () =>
  render(
    <AppContainer>
      <Bootstrap />
    </AppContainer>,
    rootEl,
  )
renderReactApp()

if (module.hot) {
  module.hot.accept('./containers/Bootstrap/Bootstrap', () => {
    // reactDeepForceUpdate(renderReactApp())
    renderReactApp()
  })
}
