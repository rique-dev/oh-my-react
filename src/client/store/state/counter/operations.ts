import * as Actions from './actions'
import { State } from './types'

const incrementComplexy = (payload: State) => {
  return (dispatch) => {
    dispatch(Actions.increment(payload))
    dispatch(Actions.increment({ count: 2 }))
  }
}

export default {
  ...Actions,
  incrementComplexy,
}
