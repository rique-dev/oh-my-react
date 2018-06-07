export { default as counter } from './counter'

import { State } from './counter'

export interface RootState {
  counter: State
}
