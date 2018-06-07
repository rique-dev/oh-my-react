export { default as counter } from './counter'

import * as Counter from './counter'

export interface RootState {
  counter: Counter.State
}
