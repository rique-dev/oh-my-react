export { default as counter } from './counter'

import { CounterState } from './counter'

export interface RootState {
  counter: CounterState
}
