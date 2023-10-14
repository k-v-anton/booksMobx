import { useFormContext } from 'react-hook-form'

import { CustomOption } from './customOption'
import styles from './styles.module.scss'
import { CustomSelectPropsType } from './types'

export const CustomSelect = (props: CustomSelectPropsType) => {
  const { optionsList, name, title} = props

  const {register, setValue} = useFormContext()

  const handleClickOptions = (e: any): void => {
    setValue(name, e.target.textContent)
  }

  return (
    <div className={styles.container} style={name ? { gridArea: name } : {}}>
      <div>
        <div className={styles.title}>{title}</div>
        <input
          type='text'
          className={styles.select}
          readOnly
          {...register(name)}
        />
      </div>
      <div className={styles.options} onClick={(e) => handleClickOptions(e)}>
        {optionsList.map((el, i) => (
          <CustomOption key={i} value={el} />
        ))}
      </div>
      <span className={styles.arrow}></span>
    </div>
  )
}
