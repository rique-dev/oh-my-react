import {
  BrowserRouter as Router,
  ConnectedRouter,
  History,
  IntlProvider,
  React,
  ReduxProvider,
  renderRoutes,
  Switch,
} from '@lib'

import { DEFAULT_LOCALE } from '@constants'
import { logo } from '@images'
import { translationMessages } from '@translations'
import routes from './routes'
import configureStore from './store'

const browserHistory = History.createBrowserHistory()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}
const reduxStore = configureStore(
  browserHistory,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default () => (
  <ReduxProvider store={reduxStore}>
    <IntlProvider
      locale={DEFAULT_LOCALE}
      key={DEFAULT_LOCALE}
      messages={translationMessages[DEFAULT_LOCALE]}
    >
      <ConnectedRouter history={browserHistory}>
        <Router>
          <div>
            <div>
              <img src={logo} width="48" />
              <div>asd</div>
            </div>
            <Switch>{renderRoutes(routes)}</Switch>
          </div>
        </Router>
      </ConnectedRouter>
    </IntlProvider>
  </ReduxProvider>
)
