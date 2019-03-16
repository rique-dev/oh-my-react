import { connectState } from '@lib'
import { RootState } from '..'
import operations from './operations'
import { Dispatch, Selectors, State } from './types'

/**
 * Conecta no component operations e state
 */
const connectRoot = () => {
  const mapStateToProps = (state: RootState) => ({
    ...state.root,
  })

  const mapDispatchToProps = {
    ...operations,
  }

  return connectState<State, Dispatch>(mapStateToProps, mapDispatchToProps)
}

type Props = State & Dispatch & Selectors

export { default } from './reducers'
export { connectRoot, State, Props }
