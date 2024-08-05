import { Author } from '@prisma/client'
import {
  IAuthorRepository,
  ISearchParams,
  ISearchResult,
} from '../interfaces/author.repository'
import { ICreateAuthor } from '../interfaces/create-author'
import { PrismaService } from '@/database/prisma/prisma.service'

export class AuthorPrismaRepository implements IAuthorRepository {
  sortableFields: string[] = ['name', 'email', 'createdAt']

  constructor(private prisma: PrismaService) {}

  create(data: ICreateAuthor): Promise<Author> {
    throw new Error('Method not implemented.')
  }
  update(data: Author): Promise<Author> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<Author> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<Author> {
    throw new Error('Method not implemented.')
  }
  findByEmail(email: string): Promise<Author> {
    throw new Error('Method not implemented.')
  }
  search(params: ISearchParams): Promise<ISearchResult> {
    throw new Error('Method not implemented.')
  }
  get(id: string): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
