import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import Register from "../../assets/login2.jpg";
import FastImage from 'react-native-fast-image'

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "You need to fill in all the inputs.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success, navigate to another screen or show a success message
        Alert.alert("Success", "Registration successful.");
        navigation.navigate("Login"); // Assuming you have a login screen
      } else {
        // If server responds with non-200 status code
        Alert.alert("Error", data.message || "Registration failed.");
      }
    } catch (error) {
      // Handle error, show error message
      Alert.alert("Error", "Registration failed.");
    }
  };

  return (
    <ImageBackground
      source={Register}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
      <View style={styles.opacityContainer}>
      <Text style={styles.title}>Join Our Community!</Text>
        <Text style={styles.subtitle}>Begin your journey to discover and recycle.</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.registerButton}
          title="Register"
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  );
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  registerButton: {
    marginBottom: 10,
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
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  registerButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default RegisterScreen;
