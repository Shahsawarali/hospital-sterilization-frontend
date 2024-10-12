// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const users = {
    "Operation Theater Staff": { username: "shah@gmail.com", password: "password" },
    "Counter Staff": { username: "iqtidar@gmail.com", password: "0987654321" },
    "Sterilization Staff": { username: "asif@gmail.com", password: "1234567890" }
  };

  const login = (username, password, department) => {
    const user = users[department];
    if (user && username === user.username && password === user.password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
