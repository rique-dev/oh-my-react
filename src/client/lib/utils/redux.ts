interface Meta {
  async: boolean,
  blocking: boolean,
  path: string,
  method: string,
}

export interface Action {
  type: string,
  payload?: any,
  meta?: Meta,
}
