import { Action } from '@lib'

enum Type {
  CHANGE_LOCALE = 'root/CHANGE_LOCALE',
}

type CHANGE_LOCALE = Type.CHANGE_LOCALE

interface State {
  locale: string
}

interface ChangeLocale extends Action<CHANGE_LOCALE, State> {}

type Actions = ChangeLocale

interface Selectors {
  currentLocale: string
}

interface Dispatch {
  changeLocale(payload: State): void
}

type Props = State & Dispatch & Selectors

export { Actions, ChangeLocale, Dispatch, Props, Selectors, State, Type }
