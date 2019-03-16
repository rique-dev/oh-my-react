import { Locales } from '@constants'
import { createAction } from '@lib'
import { Type } from './types'

export const changeLocale = createAction<Locales>(Type.CHANGE_LOCALE)

export const sidebarOpenMenu = createAction(Type.SIDEBAR_OPEN_MENU)
