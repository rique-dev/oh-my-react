/**
 * Usage: replace {KeyName}
 * type Exclude{KeyName}<T> = Without<T, '{KeyName}'>
 */
export type Without<T, K> = { [L in Exclude<keyof T, K>]: T[L] }
