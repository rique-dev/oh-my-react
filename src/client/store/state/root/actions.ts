import { createAction } from '@lib'
import { State as Payload, Type } from './types'

export const changeLocale = createAction<Payload>(Type.CHANGE_LOCALE)
