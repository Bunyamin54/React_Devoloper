// Books Context// Theme Context

// Theme Context

import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
//! Books context olusturuldu. 

const BooksContext = createContext();

//! Sarmaliyici component provider
const BooksContextProvider = ({ children }) => {
  
  

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