import isomorphicFetch from 'isomorphic-fetch'

const parseStatus = (status: any, res: any) =>
  new Promise((resolve: any, reject: any) => {
    if (status >= 200 && status < 300) {
      res.then(resolve)
    } else {
      res.then((response: any) => reject({ status, response }))
    }
  })

const requestHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
})

export default (url: any, method: any, body: any) => {
  const options = {
    method,
    headers: requestHeaders(),
    body: method !== 'GET' ? JSON.stringify(body) : undefined,
  }

  return isomorphicFetch(url, options).then((res: any) =>
    parseStatus(res.status, res.json()),
  )
}
