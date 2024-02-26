// Auth Context// Theme Context

// Theme Context

import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
//! Auth context olusturuldu. 

const AuthContext = createContext();

//! Sarmaliyici component provider
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem ("user") || (false));
  useEffect(() => {
    sessionStorage.setItem("user", user)
  
  }, [user])
  

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