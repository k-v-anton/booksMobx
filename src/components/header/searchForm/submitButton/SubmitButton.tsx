import styles from './styles.module.scss'
import { SubmitButtonPropsType } from './types'

export const SubmitButton = (props: SubmitButtonPropsType) => {
  const {title} = props
  
  return (
    <div className={styles.wrapperBtn}>
      <input type='submit' value={title} className={styles.searchBtn} />
    </div>
  )
}
