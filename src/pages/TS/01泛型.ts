export {}


type Res<T> = {
  msg: string
  code: number
  data: T
}

type LoginType = {
  token: string
}

type HomeType = {
  banner: {img: string}[]
}

const loginRes: Res<LoginType> = {
  msg: '请求成功',
  code: 200,
  data: {
    token: '1234567tfdcgtyuy'
  }
}

const homeRes: Res<HomeType> = {
  msg: 'dsadwqre',
  code: 200,
  data: {
    banner: [
      { img: '1267' }
    ]
  }
}