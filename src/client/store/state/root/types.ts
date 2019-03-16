import { Locales } from '@constants'
import { Action } from '@lib'

enum Type {
  CHANGE_LOCALE = 'root/CHANGE_LOCALE',
  SIDEBAR_OPEN_MENU = 'root/SIDEBAR_OPEN_MENU',
}

type CHANGE_LOCALE = Type.CHANGE_LOCALE
type SIDEBAR_OPEN_MENU = Type.SIDEBAR_OPEN_MENU

interface State {
  locale: Locales
  sidebar: {
    isOpen: boolean
  }
}

interface Dispatch {
  changeLocale(payload: Locales): void
  sidebarOpenMenu(payload?: void): void
}

interface ChangeLocale extends Action<CHANGE_LOCALE, Locales> {}
interface SidebarOpenMenu extends Action<SIDEBAR_OPEN_MENU, void> {}

type Actions = ChangeLocale & SidebarOpenMenu

interface Selectors {
  currentLocale: string
}

export {
  Actions,
  ChangeLocale,
  Dispatch,
  SidebarOpenMenu,
  Selectors,
  State,
  Type,
}
