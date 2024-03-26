import React, {createContext} from 'react';
import {auth} from '../auth/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext ();

const AuthContextProvider = ({children}) => {
  let navigate = useNavigate ();
  const createUser = async (email, password) => {
    try {
      let userCredential = await createUserWithEmailAndPassword (
        auth,
        email,
        password
      );

      console.log (userCredential);
      navigate ('/');
    } catch (error) {
      console.log (error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      let userCredential = await signInWithEmailAndPassword (
        auth,
        email,
        password
      );
      console.log (userCredential);
      navigate ('/');
    } catch (error) {
      console.log (error.message);
    }
  };

  const values = {createUser, signIn};

  return (
    <div>
      <AuthContext.Provider value={values}>{children} </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
