import { createContext, useEffect, useState , useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){

    const [user , setUser] = useState("");

    function signUp(email, password){
        return(
            createUserWithEmailAndPassword(auth,email ,password)
        )
    }
    function logIn(email, password){
        return(
            createUserWithEmailAndPassword(auth,email ,password)
        )
    }

    useEffect(()=>{
   const unsubsrcibe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    })

    return ()=>{
        unsubsrcibe();
    }
    },[])
    return(
        <userAuthContext.Provider value={{user, logIn}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext); 
}