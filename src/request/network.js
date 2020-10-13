import qs from 'qs'
import axios from 'axios'
import router from '@/router'

// 跳转登录页
// 携带当前页面路由，以期在登录页面完成登录后返回当前页面
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

// 提示框
const tip = message => { }

// 请求失败的错误处理
const errorHandle = (status, other) => {
  switch (status) {
    case 401:
      break
    case 404:
      break
    default:
      console.log(other)
  }
}

const instance = axios.create({ timeout: 9000 })
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

instance.interceptors.request.use(config => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'
  config.method === 'get' ?
    config.params = { token, ...config.params } :
    config.data = qs.stringify({ token, ...config.data })
  return config
}, error => {
  return Promise.error(error)
})

instance.interceptors.response.use(
  response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
  error => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    }
  })

export default instance