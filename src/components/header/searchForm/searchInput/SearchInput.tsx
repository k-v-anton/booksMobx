import { useFormContext } from 'react-hook-form'

import styles from './styles.module.scss'
import { SearchInputPropsType } from './types'

export const SearchInput = (props: SearchInputPropsType) => {
  const { name, title, type} = props

  const {register} = useFormContext()

  return (
    <div className={styles.label} style={{ gridArea: name }}>
      <h3 className={styles.title}>{title}</h3>
      <input
        className={styles.input}
        type={type}
        autoComplete='off'
        {...register(name)}
      />
    </div>
  )
}
