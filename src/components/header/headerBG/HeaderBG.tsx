import headerBG from '../../../images/header/headerBG.jpg'
import styles from './styles.module.scss'

export const HeaderBG = () => {
  
  return (
    <div className={styles.headerBG}>
      <img className={styles.imgBg} src={headerBG} alt='img' />
      <span className={styles.filter} />
    </div>
  )
}
