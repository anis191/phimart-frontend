// import React from 'react';
import { Navigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({children}) => {
    const {user, dashLoading} = useAuthContext()
    if (dashLoading) return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-pulse rounded-full bg-gradient-to-r from-blue-300 to-blue-500 h-24 w-24 shadow-lg"></div>
          
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 tracking-wide">
            Just a moment...
          </h2>

          <p className="text-sm md:text-base text-gray-500 italic">
            Loading ...
          </p>

          <span className="loading loading-ring loading-lg text-blue-500"></span>
        </div>
      </div>
    )
    return user ? children : <Navigate to="/login"></Navigate>
};

export default PrivateRoute;