import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(null);


export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState();

  useEffect(() => {
    loadData();
  }, [])
    
  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@AuthData')
      setAuthData(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (error) {
      console.log(error)
    }
  }

  const login = async (data) => {
    setAuthData(data);

    try {
      await AsyncStorage.setItem('@AuthData', JSON.stringify(data))
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    setAuthData(undefined);

    await AsyncStorage.removeItem('@AuthData');
  }

  return (
    <AuthContext.Provider value={{authData, logout, login}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;