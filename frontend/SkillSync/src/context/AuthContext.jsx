import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isloggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isloggedIn") === "true" || false
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null); 

  const login = (token, email) => {
    setToken(token);
    setEmail(email); // Set email in state
    localStorage.setItem("token", token);
    localStorage.setItem("email", email); // Store email in local storage
    setIsLoggedIn(true);
    localStorage.setItem("isloggedIn", true);
  };

  const logout = () => {
    setToken(null);
    setEmail(null); // Clear email from state
    localStorage.removeItem("token");
    localStorage.removeItem("email"); // Remove email from local storage
    setIsLoggedIn(false);
    localStorage.removeItem("isloggedIn");
  };

  const value = {
    isloggedIn,
    setIsLoggedIn,
    login,
    logout,
    email,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
