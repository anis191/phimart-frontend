// import React from 'react';
import { createContext} from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    // const {user, loginUser} = useAuth()
    const allContext = useAuth()

    return(
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;