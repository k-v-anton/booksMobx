import { makeObservable, observable } from 'mobx'
import { FormDataType } from '../components/header/searchForm/types'

class SearchFormStore {
  formData: FormDataType = {
    search: '',
    categories: 'all',
    orderBy: 'relevance',
  }

  constructor() {
    makeObservable(this, { formData: observable }, { deep: true })
  }

  changeAction = (data: FormDataType) => {
    const { categories, orderBy, search } = data
    this.formData.search = search
    this.formData.categories = categories
    this.formData.orderBy = orderBy
  }
}

export const searchFormStore = new SearchFormStore()
