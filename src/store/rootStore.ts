import { createContext } from "react";
import {booksStore} from "./booksStore";
import { searchFormStore } from "./searchFormStore";
import { activeBook } from "./activeBookStore";

export class RootStore {
  booksStore = booksStore;
  searchFormStore = searchFormStore;
  activeBook = activeBook;
}

export const RootStoreContext = createContext<RootStore | null>(null)