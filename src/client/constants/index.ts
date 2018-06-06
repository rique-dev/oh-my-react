// ex: Constant 1
export enum LOCALES {
  PT = 'pt',
  EN = 'en',
}

export const DEFAULT_LOCALE = LOCALES.PT
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
export const STATUS_CODES = {
  404: 'Not fount',
  500: 'Internal server error',
}

// ex: Constant 4

export enum PORT {
  DEVELOPMENT = 3000,
  PRODUCTION = 80,
  TEST = 3005,
}

// ex: Constant 5 - Advanced
export class API {
  public static get SERVER() {
    // const ping = async () => await fetch(`https://meu-servidor.com/api/v1/is-online`)
    const ping = async () => true

    if (ping) {
      return 'A'
    }

    return 'B'
  }
}
