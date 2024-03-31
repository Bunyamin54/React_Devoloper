import React, {createContext, useEffect, useState} from 'react';
import {auth} from '../auth/firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/ToastNotify';

export const AuthContext = createContext ();

const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState (false)

   useEffect(() => {
     userObserver()
   
   }, [])
   
  let navigate = useNavigate ();
  const createUser = async (email, password, displayName) => {
    try {
      let userCredential = await createUserWithEmailAndPassword (
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        //* key ve value değerleri aynı ise sadece key değerini yazabiliriz
        displayName,
      });
      console.log(userCredential)
      navigate ('/');
    toastSuccessNotify("Registered succesfully")

    } catch (error) {
      toastErrorNotify (error.message);
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
      toastSuccessNotify("Logged in succesfully!")
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };


  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        console.log(user);
      } else {
        // User is signed out
        setCurrentUser(false);
        console.log("logged out");
      }
    });
  };

  
  const logOut = () => {
    signOut(auth)
    toastSuccessNotify("Logged out succesfully!")
  }
  const values = {createUser, signIn, logOut, currentUser};



  return (
    <div>
      <AuthContext.Provider value={values}>{children} </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
