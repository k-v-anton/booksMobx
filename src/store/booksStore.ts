import { makeObservable, observable } from 'mobx'
import { fromPromise } from 'mobx-utils'
import { addBooks, getBooks } from '../api/getBooks'
import { BooksType } from '../types/books.Type'
import { makePersistable } from 'mobx-persist-store';

type ParamsType = {
  string: string
  subject: string
  orderBy: string
  startIndex: number
}

class BooksStore {
  books: BooksType = {} as BooksType
  isLoading: boolean = false
  isAddLoading: boolean = false

  constructor() {
    makeObservable(this, { books: observable, isAddLoading: observable }, { deep: true })

    makePersistable(this, {
      name: 'books',
      properties: [
        {
          key: 'books',
          serialize: (value) => {
            return value
          },
          deserialize: (value) => {
            return value
          },
        },
      ],
      storage: window.localStorage,
    });
  }

  getBooksAction = () => {
    this.isLoading = true
    fromPromise(getBooks()).then((res) => {
      this.books = res
      this.isLoading = false
    })
  }

  searchBooksAction = (params: ParamsType) => {
    const { string, subject, orderBy, startIndex } = params
    this.isLoading = true
    fromPromise(addBooks(string, subject, orderBy, startIndex)).then((res) => {
      console.log(res.items)

      this.books = res
      this.isLoading = false
    })
  }

  addBooksAction = (params: ParamsType) => {
    const { string, subject, orderBy, startIndex } = params
    this.isAddLoading = true

    fromPromise(addBooks(string, subject, orderBy, startIndex)).then((res) => {
      this.books.items = [...this.books.items, ...res.items]
      this.isAddLoading = false
    })
  }
}

export const booksStore = new BooksStore()
