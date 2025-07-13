// import React from 'react';
import { Navigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({children}) => {
    const {user, dashLoading} = useAuthContext()
    if (dashLoading) return <p >Loading <span className="loading loading-dots loading-xl"></span></p>
    console.log(user)
    return user ? children : <Navigate to="/login"></Navigate>
};

export default PrivateRoute;