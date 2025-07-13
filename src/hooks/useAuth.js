import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
    const[user, setUser] = useState(null)
    const[errorMsg, SetErrorMsg] = useState("")
    const[dashLoading, setDashLoading] = useState(true)

    const getToken = () =>{
        const token = localStorage.getItem('authTokens')
        return token ? JSON.parse(token) : null
    }
    const[authTokens, SetAuthTokens] = useState(getToken())

    useEffect(() =>{
        if(authTokens) fetchUserProfile()
        else setDashLoading(false)
    },[authTokens])

    // Fetch user profile:
    const fetchUserProfile = async () =>{
        try{
            const response = await apiClient.get('/auth/users/me', {
                headers: {Authorization: `JWT ${authTokens?.access}`}
            })
            // console.log(response.data)
            setUser(response.data)
        }catch(error){
            console.log(error)
            setUser(null);
        }finally{
            setDashLoading(false)
        }
    }

    // Login User:
    const loginUser = async (userData) =>{
        try{
            SetErrorMsg("")
            const response = await apiClient.post("/auth/jwt/create/", userData)
            // console.log(response.data)
            SetAuthTokens(response.data)
            localStorage.setItem("authTokens", JSON.stringify(response.data))
            await fetchUserProfile()
        }catch(error){
            SetErrorMsg(error.response.data?.detail)
        }
    }

    // Register Users:
    const registerUser = async (userData) =>{
        SetErrorMsg("")
        try{
            // console.log("UserData from useAuth:",userData)
            await apiClient.post("/auth/users/", userData)
            return{
                success: true
                // message: `Registration successfull. Redirecting...`
            }
            // console.log("Response data from useAuth:",response.data)
        }catch(error){
            if(error.response && error.response.data){
                const error_msg = Object.values(error.response.data).flat().join("\n")
                SetErrorMsg(error_msg)
            }else{
                SetErrorMsg("Registration failed. Please try again")
            }
        }
    }

    // Logout User:
    const logoutUser = async () =>{
        SetAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
    }

    return {
        user, loginUser, errorMsg, dashLoading, registerUser, logoutUser
    }
};

export default useAuth;