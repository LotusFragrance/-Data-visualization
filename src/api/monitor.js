import request from '@/utils/request'
// 故障设备
export function monitorError () {
  return request({
    url: '/monitor',
    params: {
      code: 1
    }
  })
}

// 异常设备
export function monitorAbnormal () {
  return request({
    url: '/monitor',
    params: {
      code: 2
    }
  })
}
