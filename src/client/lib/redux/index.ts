import * as Redux from 'redux'

interface Meta {
  async: boolean
  blocking: boolean
  path: string
  method: string
}

export const createAction = <Payload>(type: string) => (payload: Payload) => ({
  payload,
  type,
})

export * from 'redux'
/**
 * Override default Action of Redux
 */
export interface Action<T, P = any> extends Redux.Action<T> {
  payload?: P
  meta?: Meta
}
