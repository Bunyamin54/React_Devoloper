// Auth Context// Theme Context

// Theme Context

import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
//! Auth context olusturuldu. 

const AuthContext = createContext();

//! Sarmaliyici component provider
const AuthContextProvider = ({ children }) => {
  
  

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
//! consuming custom hook 
export const useAuthContext = () => {
    return useContext(AuthContext)
}

export default AuthContextProvider;