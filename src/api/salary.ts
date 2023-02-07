import request from '../utils/request'

// 工资列表
export function salaryList(data: salaryType) {
  return request({
    url: 'salarys/list',
    method: 'post',
    data
  })
}

