import http from '@/utils/http'
import type { sortType } from '@/define/list.d'

export const fetchList = (
  current: number,
  searchQuery: Record<string, any>,
  sortParams?: { key: string; value: sortType }
) => {
  return http.get('/fish/list', {
    params: {
      current,
      q: JSON.stringify(searchQuery),
      sort: sortParams,
    },
  })
}

export const edit = (id: number, data: Record<string, any>) => {
  console.log(`edit: ${JSON.stringify(data)}`)
  return http.patch(`/fish/${id}`, data)
}

export const create = (data: Record<string, any>) => {
  console.log(`create: ${JSON.stringify(data)}`)
  return http.put('/fish', data)
}

export const remove = (id: number, data: Record<string, any>) => {
  return http.delete(`/fish/${id}`, data)
}
