import { isObject } from 'lodash'

export const flatObject = (obj, prefix = '') => {
  return Object.keys(obj).reduce((attr, key) => {
    const value = obj[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      attr[prefixedKey] = value
    } else {
      Object.assign(attr, flatObject(value, prefixedKey))
    }

    return attr
  /* tslint:disable: align */
  }, {})
}
