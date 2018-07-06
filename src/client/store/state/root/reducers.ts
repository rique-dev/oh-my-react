import { Actions, State, Type } from './types'

const initialState: State = {
  locale: '',
}

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case Type.CHANGE_LOCALE:
      return {
        ...state,
        locale: state.locale,
      }

    default:
      return state
  }
}
