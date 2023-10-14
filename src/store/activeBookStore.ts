import { makeObservable, observable } from 'mobx'
import { BookType } from '../types/books.Type'
import { makePersistable } from 'mobx-persist-store';

class ActiveBookStore {
  book: BookType = {} as BookType

  constructor() {
    makeObservable(this, { book: observable }, { deep: true })

    makePersistable(this, {
      name: 'book',
      properties: [
        {
          key: 'book',
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

  activeBookAction = (book: BookType) => {
    this.book = book
  }
}

export const activeBook = new ActiveBookStore()
