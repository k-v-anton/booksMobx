import { observer } from 'mobx-react-lite'
import { useStore } from '../../hooks/useStore'
import { BookType } from '../../types/books.Type'
import { CardBook } from '../../pages/homePage/cardBook'
import styles from './styles.module.scss'

export const Grid = observer(() => {
  const {
    booksStore: { books, isLoading },
  } = useStore()

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {books.items && (
        <div className={styles.grid}>
          {books.items.map((book: BookType) => (
            <CardBook key={book.id} book={book} />
          ))}
        </div>
      )}
    </>
  )
})
