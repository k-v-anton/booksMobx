import { useState } from 'react'
import { BookType } from '../../../types/books.Type'
import styles from './styles.module.scss'
import {Link} from 'react-router-dom'
import { useStore } from '../../../hooks/useStore'
import { observable } from 'mobx'
import { observer } from 'mobx-react-lite'

type PropsType = {
  book: BookType
}

export const CardBook = observer((props: PropsType) => {
  const { book } = props
  const {activeBook} = useStore()
  const {activeBookAction} = activeBook



  const handleClickBook = () => {
    activeBookAction(book)
  }

  return (
    <Link to={`/book/${book.id}`} className={styles.container} onClick={handleClickBook}>
      <div className={styles.wrapperImage}>
        {book && book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail && (
          <div className={styles.images}>
            {<img className={styles.image} src={book.volumeInfo.imageLinks.smallThumbnail} alt='img' />}
          </div>
        )}
      </div>
      <div className={styles.wrapperDescription}>
        <p className={styles.categories}>
          {book &&
            book.volumeInfo &&
            book.volumeInfo.categories &&
            book.volumeInfo.categories.map((categ: string, i: number) => <span key={i}>{categ}</span>)}
        </p>
        <p className={styles.bookName}>{book && book.volumeInfo && book.volumeInfo.title && book.volumeInfo.title}</p>
        <p className={styles.authors}>
          {book &&
            book.volumeInfo &&
            book.volumeInfo.authors &&
            book.volumeInfo.authors.map((author: string, i: number) => <span key={i}>{author}</span>)}
        </p>
      </div>
    </Link>
  )
})
