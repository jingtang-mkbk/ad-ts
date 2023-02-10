import { Address } from "cluster"

export {  }

interface IuserInfo<Info> {
  name: string
  age: number
  gender: number
  info: Info
}

const employees: IuserInfo<{address: string}> = {
  name: 'zhangsan',
  age: 20,
  gender: 1,
  info: {
    address: '杭州'
  }
}

// const userInfo: IuserInfo<{ role: Array<string|number> }> = {
const userInfo: IuserInfo<{ role: (string|number)[] }> = {
  name: 'lisi',
  age: 18,
  gender: 0,
  info: {
    role: ['fufiy', 1]
  }
}