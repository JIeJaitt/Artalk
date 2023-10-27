import type ContextApi from '~/types/context'
import type { ListFetchParams } from '~/types/artalk-data'
import UpDownPaginator from './up-down'
import ReadMorePaginator from './read-more'

export interface IPgHolderOpt {
  ctx: ContextApi
  total: number
  pageSize: number

  readMoreAutoLoad?: boolean
}

export interface Paginator {
  create(opts: IPgHolderOpt): HTMLElement
  setLoading(val: boolean): void
  update(offset: number, total: number): void
  next(): void
  showErr?(msg: string): void
  getHasMore(): boolean
  /** Clear comments when fetch new page data */
  getIsClearComments(params: Partial<ListFetchParams>): boolean
  dispose(): void
}

export default { UpDownPaginator, ReadMorePaginator }
