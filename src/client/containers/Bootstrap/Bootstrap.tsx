import {
  BrowserRouter as Router,
  ConnectedRouter,
  History,
  React,
  ReduxProvider,
  renderRoutes,
  Switch,
} from '@lib'

import routes from '../../routes'
import configureStore from '../../store'
import Run from './Run'

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

interface Props extends React.Props<any> {
  isStorybook?: boolean
}

export const Bootstrap = ({ children, isStorybook }: Props) => {
  const WithRouter = () => (
    <ConnectedRouter history={browserHistory}>
      <Router>
        <Run>
          <Switch>{renderRoutes(routes)}</Switch>
        </Run>
      </Router>
    </ConnectedRouter>
  )

  const WithoutRouter = () => <Run> {children} </Run>

  const render = isStorybook ? <WithoutRouter /> : <WithRouter />

  return <ReduxProvider store={reduxStore}>{render}</ReduxProvider>
}
