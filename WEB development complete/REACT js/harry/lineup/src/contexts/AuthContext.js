import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: "Admin", // Change this to "Employee" for testing
  });

  // Function to set user role
  const setUserRole = (role) => {
    setUser({ ...user, role });
  };

  return (
    <AuthContext.Provider value={{ user, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
