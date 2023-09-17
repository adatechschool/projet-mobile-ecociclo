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

export default function LoginScreen({navigation}) {
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

        <Button title="Login" onPress={() => login(email, password)} />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "blue" }}>
            Don't have an account yet? Register here.
          </Text>
        </TouchableOpacity>
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
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: adds a semi-transparent overlay
  },
  backgroundImage: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    backgroundColor: "white",
  },
});
