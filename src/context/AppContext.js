import React from "react";
import data from '../titanic.json'

export const defaultValue={
  people:data,
  peopleToShow:data,
  setPeopleToShow:(p=>{defaultValue.peopleToShow=p}),
  page:0,
  setPage:(p=>defaultValue.page=p),
  pagination:5,
  setPagination:(p=>defaultValue.pagination=p)
}

export const AppContext = React.createContext(defaultValue);
export const AppContextProvider = AppContext.Provider;

export const AppContextConsumer = AppContext.Consumer;