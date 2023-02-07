import request from '../utils/request'

// 工资列表
export function attendanceList({ page, pagesize }: PageType) {
  return request({
    url: 'attendances',
    params: {
      page,
      pagesize
    }
  })
}