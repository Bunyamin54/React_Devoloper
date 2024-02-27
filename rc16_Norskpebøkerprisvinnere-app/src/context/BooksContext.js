// Books Context// Theme Context


import { createContext, useContext, useState } from "react";

import axios from "axios"
//! Books context olusturuldu. 

const BooksContext = createContext();

//! Sarmaliyici component provider
const BooksContextProvider = ({ children }) => {
   const [query ,setQuery] = useState ("")
   const [selectType, setSelectType] = useState ("all")
   const [myData, setMyData] = useState ([])

   const APP_KEY= 
   
   const getData = async () => {
   const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${printType}&key=${APP_KEY}`
  try {
    const {data} = await axios(url)
  } catch (error) {
    
  }


   }



   const values= { myData, setMyData}

  return (
    <BooksContext.Provider value={{  }}>
      {children}
    </BooksContext.Provider>
  );
};
//! consuming custom hook 
export const useBooksContext = () => {
    return useContext(BooksContext)
}

export default BooksContextProvider;