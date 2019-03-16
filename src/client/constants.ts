export enum LOCALES {
  PT = 'pt',
  EN = 'en',
}

export type Locales = 'pt' | 'en'

export const DEFAULT_LOCALE: Locales = LOCALES.EN

export enum KeyMap {
  ENTER = 13,
}

// ex: Constant 2
// use: const ad: Role = RolesTypes.ADMIN
interface Roles {
  GUEST: string
  BASIC: string
  ADMIN: string
}

export enum RolesTypes {
  GUEST = 'GUEST',
  BASIC = 'BASIC',
  ADMIN = 'ADMIN',
}

export type Role = keyof Roles

// ex: Constant 3

export const STATUS_CODES = Object.freeze({
  A: 'Not fount',
  B: 'Internal server error',
})
// ex: Constant 4

export enum PORT {
  DEVELOPMENT = 3000,
  PRODUCTION = 80,
  TEST = 3005,
}

// ex: Constant 5 - Advanced
