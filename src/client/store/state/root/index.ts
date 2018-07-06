import { connectState } from '@lib'
import { RootState } from '..'
import operations from './operations'
import * as selectors from './selectors'
import { Dispatch, Props, State } from './types'

/**
 * Conecta no component operations e state
 */
const connectRoot = () => {
  const mapStateToProps = (state: RootState) => ({
    ...state.root,
    connectRoot: selectors.currentLocale(state.root),
  })

  const mapDispatchToProps = {
    ...operations,
  }

  return connectState<State, Dispatch>(
    mapStateToProps,
    // mapDispatchToProps,
  )
}

export { default } from './reducers'
export { connectRoot, State, Props }
