import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isloggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isloggedIn") === "true" || false
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  useEffect(() => {
    // This effect will run every time the role changes
    // You can perform any actions here that you want to happen when the role changes
  }, [role]); // Add 'role' as a dependency to trigger the effect when it changes

  const login = (token, email, role) => {
    setToken(token);
    setEmail(email); // Set email in state
    localStorage.setItem("token", token);
    localStorage.setItem("email", email); // Store email in local storage
    localStorage.setItem("role", role);
    setIsLoggedIn(true);
    localStorage.setItem("isloggedIn", true);
    setRole(role); // Set the role in state
  };

  const logout = () => {
    setToken(null);
    setEmail(null); // Clear email from state
    localStorage.removeItem("token");
    localStorage.removeItem("email"); // Remove email from local storage
    setIsLoggedIn(false);
    localStorage.removeItem("role");
    localStorage.removeItem("isloggedIn");
    setRole(null); // Clear the role in state
  };

  const value = {
    isloggedIn,
    setIsLoggedIn,
    login,
    logout,
    email,
    role,
    token
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
