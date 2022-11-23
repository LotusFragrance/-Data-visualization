import request from '@/utils/request'
export function salesApi () {
  return request({
    url: '/sales'
  })
}
