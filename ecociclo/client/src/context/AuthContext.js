import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isloading, setIsloading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userRole, setUserRole] = useState(null); 

  const login = async (email, password) => {
    setIsloading(true);

    // Check if email and password are provided
    if (!email || !password) {
        Alert.alert('Error', 'Please provide both email and password.');
        setIsloading(false);
        return;  // Exit the function early
    }

    try {
        const response = await fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            // Display the error message from the server
            throw new Error(data);
        }

        if (data && data.token && data.role) {
            setUserToken(data.token);
            setUserRole(data.role);
            AsyncStorage.setItem("userToken", data.token);
            AsyncStorage.setItem("userRole", data.role);
        } else {
            throw new Error('Unexpected response structure from server.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        Alert.alert('Error', error.message);
    } finally {
        setIsloading(false);
    }
};

  
  const logout = () => {
    setIsloading(true);
    setUserToken(null);
    setUserRole(null); 
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("userRole");
    setIsloading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsloading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      let role = await AsyncStorage.getItem("userRole"); 
      setUserToken(userToken);
      setUserRole(role);
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
    <AuthContext.Provider value={{ login, logout, isloading, userToken, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};
