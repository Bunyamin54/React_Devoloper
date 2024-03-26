import React, { createContext} from 'react';
import {auth} from "../auth/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext ();

const AuthContextProvider = ({children}) => {

  const  createUser = async(email, password) => {

    try {
     let userCredential = await createUserWithEmailAndPassword(auth, email, password)  

     console.log(userCredential)
    } catch (error) {

        console.log(error)
    }
  }

  const values = {createUser}

  return (
    <div>
      <AuthContext.Provider value={values}>{children} </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
