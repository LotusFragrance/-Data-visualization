import request from '@/utils/request'
export function overviewApi () {
  return request({
    url: '/overview'
  })
}
