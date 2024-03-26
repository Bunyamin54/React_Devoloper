import React, { createContext} from 'react';
import {auth} from "../auth/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext ();

const AuthContextProvider = ({children}) => {

  const  createUser = async(email, password) => {

    try {
     let userCredential = await createUserWithEmailAndPassword(auth, email, password)  

     console.log(userCredential)
    } catch (error) {

        console.log(error)
    }
  }

   const signIn = async(email,password) => {



    try {
    let userCredential=   await signInWithEmailAndPassword(auth, email, password)  
    console.log(userCredential)
    } catch (error) {
      console.log(error.message)
    }
   }

  const values = {createUser, signIn}

  return (
    <div>
      <AuthContext.Provider value={values}>{children} </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
