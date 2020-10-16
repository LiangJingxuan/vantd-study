import base from '@/request/base'
import $http from '@/request/network'

// export default (params) => { $http.post(`${base.rap2rights}loginByPhone`, params) }

const login = {
  // 房源列表
  login(params) {
    return $http.post(`${base.rap2rights}loginByPhone`, params)
  }
}

export default login