import * as React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import routes from './routes'
import { IntlProvider } from 'react-intl'
import { translationMessages } from '@translations'
import { renderRoutes } from 'react-router-config'
import configureStore from './store'
import { DEFAULT_LOCALE } from '@constants'

import { logo } from '@images'

const history = createBrowserHistory()

declare global { interface Window { REDUX_INITIAL_DATA: any } }
const reduxStore = configureStore(history, window.REDUX_INITIAL_DATA)

export default () => {
  return (
    <ReduxProvider store={reduxStore}>
      <IntlProvider locale={DEFAULT_LOCALE} key={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
        <ConnectedRouter history={history}>
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
