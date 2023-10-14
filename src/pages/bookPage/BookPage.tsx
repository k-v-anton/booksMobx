import { observer } from 'mobx-react-lite'
import { useStore } from '../../hooks/useStore'
import styles from './styles.module.scss'

export const BookPage = observer(() => {
  const { activeBook } = useStore()
  const { book } = activeBook

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.baner}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />
        </div>

        <div className={styles.info}>
          <span className={styles.categories}>{book.volumeInfo.categories}</span>
          <div className={styles.title}>{book.volumeInfo.title}</div>
          <div className={styles.authors}>{book.volumeInfo.authors}</div>
          <div className={styles.description}>{book.volumeInfo.description}</div>
        </div>
      </div>
    </main>
  )
})
