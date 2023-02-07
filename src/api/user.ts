import request from '../utils/request'

// 登录
export function login(data: {mobile: string, password: string}) {
  return request({
    url: 'sys/login',
    method: 'post',
    data
  })
}

// profileData
export const profileData = () => {
  return request({
    url: 'sys/profile',
    method: 'post'
  })
}

// userData
export const userData = ( userId: idType ) => {
  return request({
    url: `sys/user/${userId}`
  })
}

// 审批 1/10
export const approvals = ( { page, pagesize }: PageType ) => {
  return request({
    url: `user/process/instance/${page}/${pagesize}`,
    method: 'PUT'
  })
}

// // 审批详情
export const approvalsDetail = ( processId: idType ) => {
  return request({
    url: `user/process/instance/${processId}`,
    method: 'get'
  })
}

// // 审批进度
export const approvalsTimeline = ( processId: idType ) => {
  return request({
    url: `user/process/instance/tasks/${processId}`,
    method: 'get'
  })
}