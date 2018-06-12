import {
  React,
  Switch,
  BrowserRouter as Router,
  renderRoutes,
  ReduxProvider,
  IntlProvider,
  ConnectedRouter,
  History,
} from '@lib'

import routes from './routes'
import configureStore from './store'
import { translationMessages } from '@translations'
import { DEFAULT_LOCALE } from '@constants'
import { logo } from '@images'

const browserHistory = History.createBrowserHistory()

declare global { interface Window { REDUX_INITIAL_DATA: any } }
const reduxStore = configureStore(browserHistory, window.REDUX_INITIAL_DATA)

export default () => {
  return (
    <ReduxProvider store={reduxStore}>
      <IntlProvider locale={DEFAULT_LOCALE} key={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
        <ConnectedRouter history={browserHistory}>
          <Router>
            <div>
              <div>
                <img src={logo} width="48" />
                <div>asd</div>
              </div>
              <Switch>
                {renderRoutes(routes)}
              </Switch>
            </div>
          </Router>
        </ConnectedRouter>
      </IntlProvider>
    </ReduxProvider>
  )
}
