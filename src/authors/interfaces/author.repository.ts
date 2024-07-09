import { Author } from '@prisma/client'
import { ICreateAuthor } from './create-author'

export interface ISearchParams {
  page?: number
  perPage?: number
  filter?: string
  sort?: string
  sortDir?: 'asc' | 'desc'
}
export interface ISearchResult {
  items: Author[]
  currentPage: number
  perPage: number
  lastPage: number
  total: number
}

export interface IAuthorRepository {
  sortableFields: string[]

  create(data: ICreateAuthor): Promise<Author>
  update(data: Author): Promise<Author>
  delete(id: string): Promise<Author>
  findById(id: string): Promise<Author>
  findByEmail(email: string): Promise<Author>
  search(params: ISearchParams): Promise<ISearchResult>
  get(id: string): Promise<any>
}
