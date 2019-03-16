import * as Redux from 'redux'

interface Meta {
  async: boolean
  blocking: boolean
  path: string
  method: string
}

export const createAction = <Payload = void>(type: string) => (
  payload: Payload,
) => ({
  payload,
  type,
})

export * from 'redux'
/**
 * Override default Action of Redux
 */
export interface Action<Type, Payload = void> extends Redux.Action<Type> {
  payload: Payload
  meta?: Meta
}
