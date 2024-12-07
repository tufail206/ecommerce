import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginUserData, setLoginUserData] = useState(() => {
    const storedUserData = localStorage.getItem("loginUserData");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });
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
    setLoginUserData(user); // Update loginUserData state directly
  };

  const logOut = () => {
    setToken("");
    setLoginUserData(null);
    localStorage.removeItem("cart");
   
  };

  const isLoggedIn = Boolean(token);
  const isAdmin = loginUserData?.isAdmin || false; // Check if the user is an admin

  return (
    <AppContext.Provider value={{ token, GenerateToken, logOut, isLoggedIn, loginUserData, isAdmin }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => useContext(AppContext);
