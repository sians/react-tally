import superagent from 'superagent'
import Cookies from 'js-cookie'

import { configVariables } from 'config'

const methods = ['get', 'post', 'put', 'patch', 'delete']

const formatUrl = (path) => (
  path.search(/^https?:\/\/(.*)/) === -1
  ? { url: `${configVariables.apiUrl}/${path}`, external: false }
  : { url: path, external: true }
)

const successResponse = (response, resolve) => {
  // Set or Remove authorization header
  const authorizationHeader = response.headers.authorization
  if (authorizationHeader) {
    Cookies.set('authorization-header-tally', authorizationHeader)
  } else {
    if (response.body.meta && response.body.meta.logout) {
      Cookies.remove('authorization-header-tally')
    }
  }

  return resolve({ data: response.body })
}

export default class client {
  constructor(req) {
    methods.forEach(method => {
      this[method] = (path, { params, data, headers, files, fields } = {}) => new Promise((resolve, reject) => {
        const urlData = formatUrl(path)

        const request = superagent[method](urlData.url)

        if (params) {
          request.query(params)
        }
        if (headers) {
          request.set(headers)
        }
        if (fields) {
          fields.forEach(item => request.field(item.key, item.value))
        }

        const authorizationHeaderCookie = Cookies.get('authorization-header-tally')
        if (authorizationHeaderCookie) {
          request.set('Authorization', authorizationHeaderCookie)
        }

        if (data) {
          request.send(data)
        }
        request.end((err, res = {}) => (err ? errorResponse(res, err, reject) : successResponse(res, resolve)))
      })
    }
  )}
}