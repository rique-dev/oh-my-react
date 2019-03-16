/**
 * Checks if `value` is `undefined`.
 *
 * @since 0.0.1
 * @category Util
 * @param value The value to check.
 * @returns Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */

export const isUndefined = (value: any): value is boolean => value === undefined
