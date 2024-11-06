import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";


const AppContext = createContext();

export const AuthProvider = ({ children }) => {

  const [loginUserData, setLoginUserData] = useState("");
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  useEffect(() => {
    // Sync token to localStorage
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    // Sync user data to localStorage
    if (loginUserData) {
      localStorage.setItem("loginUserData", JSON.stringify(loginUserData));
    } else {
      localStorage.removeItem("loginUserData");
    }
  }, [loginUserData]);

  const GenerateToken = (userToken, user) => {
    setToken(userToken);
    setLoginUserData(user);
  };

  const logOut = () => {
 
    setToken("");
    
    localStorage.removeItem("cart")
    setLoginUserData(null);
   
  };

  const isLoggedIn = Boolean(token);

  return (
    <AppContext.Provider value={{ token, GenerateToken, logOut, isLoggedIn, loginUserData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => useContext(AppContext);
