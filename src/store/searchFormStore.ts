import { makeObservable, observable } from 'mobx'
import { FormDataType } from '../components/header/searchForm/types'
import { makePersistable } from 'mobx-persist-store';

class SearchFormStore {
  formData: FormDataType = {
    search: '',
    categories: 'all',
    orderBy: 'relevance',
  }

  constructor() {
    makeObservable(this, { formData: observable }, { deep: true })

    makePersistable(this, {
      name: 'formData',
      properties: [
        {
          key: 'formData',
          serialize: (value) => {
            return value
          },
          deserialize: (value) => {
            return value
          },
        },
      ],
      storage: window.localStorage,
    });
  }

  changeAction = (data: FormDataType) => {
    const { categories, orderBy, search } = data
    this.formData.search = search
    this.formData.categories = categories
    this.formData.orderBy = orderBy
  }
}

export const searchFormStore = new SearchFormStore()
