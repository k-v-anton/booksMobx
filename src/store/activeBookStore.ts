import { makeObservable, observable } from 'mobx'
import { BookType } from '../types/books.Type'

class ActiveBookStore {
  book: BookType = {} as BookType

  constructor() {
    makeObservable(this, { book: observable }, { deep: true })
  }

  activeBookAction = (book: BookType) => {
    this.book = book
  }
}

export const activeBook = new ActiveBookStore()
