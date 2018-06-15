const executeIfFunction = (f: () => void) => (typeof f === 'function' ? f() : f)

const switchCaseKey = (cases: object) => (defaultCase: any) => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase

export const switchCase = (cases: object) => (defaultCase: any) => key =>
  executeIfFunction(switchCaseKey(cases)(defaultCase)(key))
