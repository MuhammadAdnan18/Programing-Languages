import { useState } from "react";

const useAuth = () => {
  // Assume the initial user is null and role is "Guest"
  const [user, setUser] = useState({ id: null, role: "Admin" });

  // Function to log in the user and set their role
  const login = (userData) => {
    // Perform authentication logic here, such as verifying credentials
    // For simplicity, we'll assume the user is authenticated successfully
    setUser({ id: userData.id, role: userData.role });
  };

  // Function to log out the user
  const logout = () => {
    // Perform logout logic here, such as clearing user data from local storage
    setUser({ id: null, role: "Admin" });
  };

  return { user, login, logout };
};

export default useAuth;
