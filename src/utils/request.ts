import axios, { AxiosRequestHeaders } from 'axios'
import { getToken, getTimeStamp, removeToken, removeTimeStamp } from './storage'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = getToken()
  if(token){
    const start = Number(getTimeStamp())
    const end = Date.now()
    if(end - start >= 3600000){
      removeToken()
      removeTimeStamp()
    }
    // config.headers.Authorization = `Bearer ${token}`
    (config.headers as AxiosRequestHeaders).set('Authorization', `Bearer ${token}`)
  }

  return config;
  }, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data;
  }, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
})

export default instance