import { isArray, isNaN, isNumber as _isNumber } from 'lodash'

type nValues = any | any[]

/**
 * Checks if value is classified as a Number primitive or object.
 *
 * Note: To exclude Infinity, -Infinity, and NaN,
 * which are classified as numbers, use the _.isFinite method.
 *
 * @param value: anyThe value to check.
 * @param values: any []
 * @return Returns true if value is correctly classified, else false.
 */
const isNumber = (values: nValues) =>
  isArray(values)
    ? !values.map((value: any) => _isNumber(parseInt(value, 10))).some(isNaN)
    : (value: any) => _isNumber(parseInt(value, 10))

export { isNumber }
