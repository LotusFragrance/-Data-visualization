import request from '@/utils/request'
export function pointApi () {
  return request({
    url: '/point'
  })
}
export function pointSumApi () {
  return request({
    url: '/point/sum'
  })
}
