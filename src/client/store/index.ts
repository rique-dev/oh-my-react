import {
  applyMiddleware,
  combineReducers,
  createLogger,
  createStore,
  reduxPromiseMiddleware,
  reduxThunk,
  routerMiddleware,
} from '@lib'
import { apiService } from './middlewares'
import * as reducers from './state'

export default (history: any, initialState: any) => {
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
