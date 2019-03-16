import { State as Counter } from './counter'
import { State as Root } from './root'

export interface RootState {
  counter: Counter
  root: Root
}

export { default as counter } from './counter'
export { default as root } from './root'
