import {Outlet} from 'react-router-dom'

import { Header } from '../../components/header'
import styles from './styles.module.scss'

export const Layout = () => {
 
  return (
    <div
     className={styles.container}
    >
      <Header />
      <Outlet />
    </div>
  )
}