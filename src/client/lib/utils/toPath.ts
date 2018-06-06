import { PathFunction, compile } from 'path-to-regexp'

export const toPath = <T>(path) => (params: T) => compile(path)(params)
