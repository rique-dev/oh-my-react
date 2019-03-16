import { REGEX_CSS_COLOR } from './internal'
/**
 * Checks if `value` is color `hex`.
 *
 * @since 0.0.1
 * @category Util
 * @param value The value to check.
 * @returns Returns `true` if `value` is color `hex`, else `false`.
 * @example
 *
 * isHex('#fff')
 * // => true
 *
 * isHex('#zzz')
 * // => false
 */

export const isCssColor = (value: string): boolean =>
  REGEX_CSS_COLOR.test(value)
