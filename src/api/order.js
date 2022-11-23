import request from '@/utils/request'
export function orderApi () {
  return request({
    url: '/order'
  })
}
