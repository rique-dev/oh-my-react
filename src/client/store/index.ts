import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Dispatch } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import * as reducers from './state'
import { apiService, createLogger } from './middlewares'

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
      createLogger(true),
    ),
  )
}
