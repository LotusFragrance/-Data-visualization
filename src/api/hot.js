import request from '@/utils/request'
export function hotApi () {
  return request({
    url: '/hot'
  })
}
