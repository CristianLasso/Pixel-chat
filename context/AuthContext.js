import React, { createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {

  const [currentUser, setCurrentUser] = useState(false);

  const signup = (name, lastname, username, email, password, confirmationPassword) => {
    setCurrentUser(true)
  }

  const login = (username, password) => {
    if(username === "cristian" && password === "123456"){
      setCurrentUser(true)
    }
  }

  const logout = () => setCurrentUser(false);

  const value = {
    currentUser,
    login,
    logout,
    signup
  };
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}