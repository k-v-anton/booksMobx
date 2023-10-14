import { FormProvider, useForm } from 'react-hook-form'

import { CustomSelect } from './customSelect'
import { categories, formDefaultValues, searchInOptions } from './data'
import { SearchInput } from './searchInput'
import styles from './styles.module.scss'
import { SubmitButton } from './submitButton'
import { FormDataType } from './types'
import { useStore } from '../../../hooks/useStore'

export const SearchForm = () => {
  const form = useForm({
    defaultValues: formDefaultValues, 
  })
  const { handleSubmit } = form

  const {searchFormStore, booksStore} = useStore()
  const {formData, changeAction } = searchFormStore
  const {searchBooksAction} = booksStore

  const handleSubmitForm = (data: FormDataType) => {
    console.log(data);
    
    changeAction(data) 
    searchBooksAction({string: data.search, subject: data.categories, orderBy: data.orderBy, startIndex: 0})

  }

  return (
    <FormProvider {...form}>
      <form name={'searchForm'} className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <SearchInput name='search' type='text' title='search' />
        <SubmitButton title='search' />
        <CustomSelect optionsList={categories} name={'categories'} title={'categories'} />
        <CustomSelect optionsList={searchInOptions} name={'orderBy'} title={'sorting by'} />
      </form>
    </FormProvider>
  )
}
