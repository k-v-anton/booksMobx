import { FormDataType } from "./types"

export const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
export const searchInOptions = ['relevance', 'newest']

export const formDefaultValues: FormDataType = {
  search: '',
  categories: 'all',
  orderBy: 'relevance',
}
