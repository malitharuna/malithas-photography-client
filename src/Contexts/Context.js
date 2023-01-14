
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';



export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({children}) => {
    const [user,setUser] = useState([]);
    const [loading,setLoading]= useState(true);

    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const registerWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    const logInWithGoogle = ()=>
    {   setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const updateNameAndPhoto =(name,url)=>{
        return updateProfile(auth.currentUser,{displayName: name, photoURL: url});
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        localStorage.removeItem('');
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });
      return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser, 
        registerWithGoogle,
        logInWithGoogle,
        updateNameAndPhoto,
        logIn, 
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;