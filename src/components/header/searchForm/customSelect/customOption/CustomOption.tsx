import styles from './styles.module.scss'

type PropsType = {
  value: string
}
export const CustomOption = (props: PropsType) => {
  const { value } = props
  return <span className={styles.option}>{value}</span>
}
