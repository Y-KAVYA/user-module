import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const login = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser?.username === username &&
      storedUser?.password === password
    ) {
      setUser(storedUser);
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
