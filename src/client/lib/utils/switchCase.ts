const executeIfFunction = f =>
  typeof f === 'function' ? f() : f

const switchCaseKey = cases => defaultCase => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase

export const switchCase = cases => defaultCase => key =>
  executeIfFunction(switchCaseKey(cases)(defaultCase)(key))
