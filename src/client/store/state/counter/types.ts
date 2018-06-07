import { Action } from '@lib'

export enum type {
  INCREMENT = 'counter/INCREMENT',
  DECREMENT = 'counter/DECREMENT',
}

type INCREMENT = type.INCREMENT
type DECREMENT = type.DECREMENT

export type State = {
  count?: number;
}
export interface Increment extends Action<INCREMENT> {
  payload: State
}

export interface Decrement extends Action<DECREMENT> {
  payload: State
}

export type Actions = Increment | Decrement

export interface Selectors {
  isPrime: number
}
export interface Dispatch {
  increment?: (payload: State) => void
  decrement?: (payload: State) => void
  incrementComplexy?: (payload: State) => void
}

export type Props = State & Dispatch & Selectors
