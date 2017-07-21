import axios from '../interceptor.js'
import config from '../config'

export default {
  get (uri, data = null) {
    if (!uri) {
      console.log('API function call requires uri argument')
      return
    }
    const url = config.serverURI + uri
    return axios.get(url, {
      params: data
    })
  },
  post (uri, data = null) {
    if (!uri) {
      console.log('API function call requires uri argument')
      return
    }
    const url = config.serverURI + uri
    return axios.post(url, data)
  }
}
