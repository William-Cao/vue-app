import axios from 'axios'
// import router from '../router/index'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return checkStatus(response)
}, error => {
  return Promise.reject(error.response)
})

function checkStatus (response) {
  // http状态码正常，则直接返回数据
  if (response.status === 200 || response.status === 304) {
    // 如果不需要除了data之外的数据，可以直接 return response.data
    return Promise.resolve(response)
  }
  // 异常状态下，把错误信息返回去
  return Promise.reject(response)
}

export default {
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: process.env.API_ROOT,
      url,
      params, // get 请求时带的参数
      timeout: 10000
      // headers: {
      //   'X-Requested-With': 'XMLHttpRequest'
      // }
    })
  },
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: process.env.API_ROOT,
      url,
      data: JSON.stringify(data),
      timeout: 10000
      // headers: {
      //   'X-Requested-With': 'XMLHttpRequest',
      //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      // }
    })
  },
  all (array) {
    // spread分割
    // return axios.all(array).then(axios.spread(function (acct, perms) { console.log(acct, perms) }))
    return axios.all(array).then(promise => { return promise })
  }
}
