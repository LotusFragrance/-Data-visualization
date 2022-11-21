import request from '@/utils/request'
export function userApi () {
  return request({
    url: '/user'
  })
}

export function userRegionApi () {
  return request({
    url: '/user/region'
  })
}
