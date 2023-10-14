import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../../pages/homePage/HomePage'
import { RootStore, RootStoreContext } from '../../store/rootStore'
import { BookPage } from '../../pages/bookPage/BookPage'
import { Layout } from '../../pages/layout/Layout'

export const App = () => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <Routes>
       <Route path='/' element={<Layout/>}>
          <Route path='/' element={<HomePage />} />
          <Route path='/book/:id' element={<BookPage/>} />
       </Route>
      </Routes>
    </RootStoreContext.Provider>
  )
}
