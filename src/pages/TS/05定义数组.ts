export {}

type NewsItem = {
  title: string
  id: number
}

type NewList = NewsItem[]
let news = <NewList>[]

setTimeout(()=>{
  const res = [
    { title: '发发', id: 1 },
    { title: '发发', id: 2 },
    { title: '发发', id: 3 },
  ]

  news = res
})