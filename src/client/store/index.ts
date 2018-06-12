import {
  createStore,
  applyMiddleware,
  combineReducers,
  routerMiddleware,
  reduxThunk,
  createLogger,
  reduxPromiseMiddleware,
} from '@lib'
import * as reducers from './state'
import { apiService } from './middlewares'

export default (history, initialState) => {
  const rootReducer = combineReducers(reducers)

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      apiService,
      routerMiddleware(history),
      reduxThunk,
      reduxPromiseMiddleware(),
      createLogger(),
    ),
  )
}
