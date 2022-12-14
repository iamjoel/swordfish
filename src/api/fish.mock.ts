import Mock from 'mockjs'
import qs from 'query-string'

const Random = Mock.Random
const cityList = [
  'Beijing',
  'Beijing',
  'Beijing',
  'New York',
  'London',
  'Tokyo',
]
let list: any[] = []
const total = Random.integer(1, 100)

for (let i = 1; i <= total; i++) {
  list.push({
    id: i,
    gender: Random.integer(0, 1),
    name: Random.first(),
    age: Random.integer(10, 100),
    address: cityList[Math.floor(Math.random() * cityList.length)],
    describe: Random.sentence(),
    createTime: Random.date('yyyy-MM-dd'),
  })
}

Mock.mock(/\/fish\/list/, ({ url }: any) => {
  const { current, q, sort } = qs.parse(url.split('?')[1])
  const start = (parseInt((current as string) || '1', 10) - 1) * 10
  const end = start + 10 // 10条数据
  const filteredList = list.filter((item: any) => {
    const { name, age, address, describe } = JSON.parse(q as string)
    return (
      (name ? item.name.includes(name) : true) &&
      (age ? item.age === parseInt(age as string, 10) : true) &&
      (address ? item.address.includes(address) : true) &&
      (describe ? item.describe.includes(describe) : true)
    )
  })
  if (sort) {
    const { key, value } = JSON.parse(sort as string)
    if (value) {
      filteredList.sort((a: any, b: any) =>
        value === 'ascend' ? a[key] - b[key] : b[key] - a[key]
      )
    }
  }
  return {
    code: 0,
    list: filteredList.slice(start, end),
    total: filteredList.length,
  }
})

// create
Mock.mock(/\/fish/, ({ body }: any) => {
  list.unshift({
    ...JSON.parse(body),
    id: list.length + 5,
    createTime: Random.date('yyyy-MM-dd'),
  })
  return {
    code: 0,
  }
})

Mock.mock(/\/fish\/\d+/, ({ url, body, type }: any) => {
  const id = parseInt(/\/fish\/(\d+)/.exec(url)?.[1] as string, 10)
  if (type === 'DELETE') {
    list = list.filter((item: any) => item.id !== id)
  } else if (type === 'PATCH') {
    list = list.map((item) => (item.id === id ? JSON.parse(body) : item))
  }
  return {
    code: 0,
  }
})
