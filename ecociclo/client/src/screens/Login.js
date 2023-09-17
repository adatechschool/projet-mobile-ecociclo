import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Button,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import Login from "../../assets/login2.jpg";
import { AuthContext } from "../context/AuthContext";
// import FastImage from 'react-native-fast-image';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  return (
    <ImageBackground
      source={Login}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
      <View style={styles.opacityContainer}>

      <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Discover markets near you and recycle with ease.</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          title="Login"
          style={styles.loginButton}
          onPress={() => login(email, password)}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.redirectButton}>
            Don't have an account yet? Register here.
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  opacityContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10, 
    alignItems: 'center',
    width: "90%", 
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  input: {
    width: "90%", 
    height: 45,  
    borderColor: "#C19ECF", 
    borderWidth: 1.5,
    marginBottom: 12,
    padding: 10,  
    borderRadius: 12,  
    backgroundColor: "white",
    fontSize: 16,  
    color: "#4A4A4A",   
},
  loginButton: {
    marginBottom:10,
    backgroundColor: "lightpink", 
    padding: 12,
    borderRadius: 12,  
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#9F79EE",  
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
},
loginButtonText: {
    color: "white",
    fontWeight: "bold",  
    fontSize: 16,
},
  redirectButton: {
    color: "white",
    fontWeight: "bold",
  },
});
