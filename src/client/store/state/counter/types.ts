import { Action } from '@lib'

export enum Type {
  INCREMENT = 'counter/INCREMENT',
  DECREMENT = 'counter/DECREMENT',
}

type INCREMENT = Type.INCREMENT
type DECREMENT = Type.DECREMENT

export type State = {
  count: number;
  list?: [any];
}
export interface Increment extends Action<INCREMENT, State> { }

export interface Decrement extends Action<DECREMENT, State> { }

export type Actions = Increment | Decrement

export interface Selectors {
  isPrime: number
}
export interface Dispatch {
  increment: (payload: State) => void
  decrement: (payload: State) => void
  incrementComplexy: (payload: State) => void
}

export type Props = State & Dispatch & Selectors
