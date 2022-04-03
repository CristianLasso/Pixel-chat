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
      return(true)
    }else{
      setCurrentUser(false)
      return(false)
    }
  }

  const logout = () => setCurrentUser(false);

  const value = {
    currentUser,
    setCurrentUser,
    login,
    logout,
    signup
  };
  return (
    <AuthContext.Provider value={value} displayName="AuthContext">
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;