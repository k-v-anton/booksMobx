import axios from 'axios'
import { BooksType } from '../types/books.Type'

export const getBooks = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=''&orderBy=relevance&key=AIzaSyA5sBLHH39C9yj2ViwiW4QfkcvOTw0cEvY`
  const response = await axios.get<BooksType>(url)
  return response.data
}

export const addBooks = async (string: string, subject: string, orderBy: string,  startIndex: number) => {

  const stringSearch = string === '' ? `q=''` : `q=${string}`

  const stringSubject = subject === 'all' ? '' : `+subject:${subject}`



  const url =  `https://www.googleapis.com/books/v1/volumes?${stringSearch}${stringSubject}&startIndex:${startIndex}&maxResults:10&orderBy=${orderBy}&key=AIzaSyB4H5V0UM1IN9yRozSXIzQCu_7T1Qnp54k`
  const response = await axios.get<BooksType>(url)
  return response.data
}


