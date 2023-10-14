import { HeaderBG } from './headerBG'
import { SearchForm } from './searchForm'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderBG />
      <SearchForm />
    </div>
  )
}
