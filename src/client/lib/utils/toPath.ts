import { pathToRegexp } from '@lib'

export const toPath = <T>(path: string) => (params: T) =>
  pathToRegexp.compile(path)(params)
