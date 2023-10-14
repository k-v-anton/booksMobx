import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useStore } from '../../hooks/useStore'

import { Grid } from '../../components/grid/Grid'
import styles from './styles.module.scss'

export const HomePage = observer(() => {
  const { booksStore, searchFormStore } = useStore()
  const { getBooksAction, addBooksAction, isAddLoading, books } = booksStore
  const { formData } = searchFormStore

  const handleAddNewBook = () => {
    addBooksAction({
      string: formData.search,
      subject: formData.categories,
      orderBy: formData.orderBy,
      startIndex: books.items.length,
    })
  }

  useEffect(() => {
    getBooksAction()
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {books && books.totalItems && (
          <div className={styles.count}>
            <span>Found results: </span>
            {books.totalItems}
          </div>
        )}
        <Grid />
        {isAddLoading ? <div>Load...</div> : <button onClick={handleAddNewBook}>add</button>}
      </div>
    </main>
  )
})
