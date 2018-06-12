import { PathFunction, compile } from 'path-to-regexp'

export const toPath = <T>(path: string) => (params: T) => compile(path)(params)
