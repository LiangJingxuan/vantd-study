import base from '@/request/base'
import $http from '@/request/network'

const house = {
  // 房源列表
  houseList(params) {
    return $http.get(`${base.rap2}getRentHouseByCond`, { params })
  },
  // 收藏房源
  houseCollect(params) {
    return $http.post(`${base.rap2}addRendHouseCollect`, params)
  }
  // // 新闻列表    
  // articleList() {
  //   return axios.get(`${base.sq}/topics`);
  // },
  // // 新闻详情,演示    
  // articleDetail(id, params) {
  //   return axios.get(`${base.sq}/topic/${id}`, {
  //     params: params
  //   });
  // },
  // // post提交    
  // login(params) {
  //   return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
  // }
}

export default house