import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isloading, setIsloading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setIsloading(true);
    setUserToken("gdh!iaupo");
    AsyncStorage.setItem("userToken", 'gdh!iaupo');
    setIsloading(false);
  };
  const logout = () => {
    setIsloading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsloading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsloading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
    } catch (err) {
      console.log(`isLogged in error ${err}`);
    }finally {
        setIsloading(false); // prevent a perpetual login phase
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isloading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
