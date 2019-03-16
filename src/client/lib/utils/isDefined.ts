/**
 * Checks if `value` is color `defined`.
 *
 * @since 0.0.1
 * @category Util
 * @param value The value to check.
 * @returns Returns `true` if `value` is `defined`, else `false`.
 * @example
 *
 * const a = { a: 1 }
 * isDefined(a)
 * // => true
 *
 * const a;
 * isDefined(a)
 * // => false
 */

export const isDefined = (value: any): value is boolean =>
  typeof value !== 'undefined'
