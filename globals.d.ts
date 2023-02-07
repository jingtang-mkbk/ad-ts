declare module '*.scss'
declare module 'redux-immutable'


type idType = string | number | undefined

interface reducerActionType {
  type: string,
  data: object | array
}

interface PageType {
  page: string | number,
  pagesize: string | number
}

interface salaryType {
  total: idType
  page: idType
  pageSize: idType
}

// 泛型函数，接口，类
interface ApiResponse<T> {
//基本上响应数据里的message都是string类型
message:string, 
//但是data的类型是变化的，所以我们不能写死，需要传给axios
data:T
}
