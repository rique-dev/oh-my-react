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
// import { connectRoot, Props as RootProps } from '@State/root'
import { translationMessages } from '@translations/locales'
import routes from './routes'
import configureStore from './store'

// tslint:disable
import '@styles/global.scss'
import '@vendors'
// tslint:enable

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

// @connectRoot()
export default class App extends React.Component {
  // componentWillMount(): void {
  //   const { changeLocale } = this.props as RootProps
  //   changeLocale({
  //     locale: DEFAULT_LOCALE,
  //   })
  // }

  show(): void {
    this.setState({})
  }

  render(): JSX.Element {
    // const { locale } = this.props as RootProps
    const locale = DEFAULT_LOCALE

    this.show()

    return (
      <ReduxProvider store={reduxStore}>
        <IntlProvider
          locale={locale}
          key={locale}
          messages={translationMessages[locale]}
        >
          <ConnectedRouter history={browserHistory}>
            <Router>
              <div>
                <Switch>{renderRoutes(routes)}</Switch>
              </div>
            </Router>
          </ConnectedRouter>
        </IntlProvider>
      </ReduxProvider>
    )
  }
}
