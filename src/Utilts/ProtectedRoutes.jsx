import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase';
import { useLocation } from 'react-router-dom';

const useAuth = () =>{
    const [user] = useAuthState(auth);
    let isLoggedIn = false;
    if(user && user.email === null){
        return isLoggedIn
    }else{
        isLoggedIn=true;
    }
}

const ProtectedRoutes = () => {
    const location  = useLocation();
    const isAuth = useAuth();
  return isAuth ?<Outlet/>:<Navigate to="/logIn" replace state={{from :location}}/>;
};

export default ProtectedRoutes;
