import { useContext } from 'react';
import { RootStoreContext } from '../store/rootStore';

export const useStore = () => {
  const context = useContext(RootStoreContext)
 if (!context) throw new Error('Оберните приложение в провайдер')

 return context

}