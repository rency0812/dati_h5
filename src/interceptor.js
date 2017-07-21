import axios from 'axios'

axios.defaults.timeout = 5000

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(res => {
  return res
}, error => {
  if (error.message === 'Network Error') {
    return Promise.reject(error)
  }
})

export default axios

