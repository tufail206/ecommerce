import { createContext, useContext, useState } from "react";

let appContext=createContext()
export let AuthProvider=({children})=>{
let [LoginUserData,setLoginUserData]=useState("")
let [token,setToken]=useState(localStorage.getItem("token"))

  let GenerateToken=(userToken,users)=>{

     localStorage.setItem("token",userToken)
     setToken(userToken)
     setLoginUserData(users)
  }
let logOut=()=>{
    setToken("")
    setLoginUserData(null)
     localStorage.removeItem("token")
   
}

  let isLoggedIn=!!token
    return <appContext.Provider value={{GenerateToken,logOut,isLoggedIn,setLoginUserData,LoginUserData}}>{children}</appContext.Provider>
}

export let useAuth=()=>{
    return useContext(appContext)
}