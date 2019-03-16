import { DEFAULT_LOCALE } from '@constants'
import { NOT } from '@lib'
import { Actions, State, Type } from './types'

const initialState: State = {
  locale: DEFAULT_LOCALE,
  sidebar: {
    isOpen: false,
  },
}

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case Type.CHANGE_LOCALE:
      return {
        ...state,
        locale: action.payload,
      }
    case Type.SIDEBAR_OPEN_MENU:
      return {
        ...state,
        sidebar: {
          isOpen: NOT(state.sidebar.isOpen),
        },
      }

    default:
      return state
  }
}
