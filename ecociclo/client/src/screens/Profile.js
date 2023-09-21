import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

const Profile = () => {
  const { logout, userToken } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    const fetchUserRole = async () => {
      const role = await AsyncStorage.getItem("userRole");
      setUserRole(role);
    };
    fetchUserRole();
  }, []);

  const [formData, setFormData] = useState({
    ardt: "",
    timeD: "",
    timeF: "",
    nom: "",
    adresse: "",
    ouverture: "",
    tag: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const submitForm = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          ...formData,
          role: userRole,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Data sent successfully.");
      } else {
        Alert.alert("Error", "Failed to send data.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred.");
    }
    console.log("Data:", formData);
  };
  const getIDfromToken = (token) => {
    try {
      const decoded = jwt_decode(token);
      return decoded.id;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = getIDfromToken(userToken);
      try {
        const response = await fetch(`http://localhost:8000/user/${userId}`);
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchData();
  }, [userToken]);

  return (
    <View style={styles.container}>
      {userInfo ? (
        <>
          <Text style={styles.header}>{userInfo.username}</Text>
          <Text style={styles.header}>{userInfo.email}</Text>
        </>
      ) : (
        <Text>Loading user information...</Text>
      )}
      {userRole === "admin" ? (
        <>
          <TextInput
            placeholder="Arrondissement"
            value={formData.ardt.toString()}
            onChangeText={(text) => handleInputChange("ardt", text)}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="HH:mm (e.g. 11:00)"
            value={formData.timeD}
            onChangeText={(text) => handleInputChange("timeD", text)}
            style={styles.input}
          />
          <TextInput
            placeholder="HH:mm (e.g. 11:00)"
            value={formData.timeF}
            onChangeText={(text) => handleInputChange("timeF", text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Name"
            value={formData.nom}
            onChangeText={(text) => handleInputChange("nom", text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Address"
            value={formData.adresse}
            onChangeText={(text) => handleInputChange("adresse", text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Open Days"
            value={formData.ouverture}
            onChangeText={(text) => handleInputChange("ouverture", text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Tag"
            value={formData.tag}
            onChangeText={(text) => handleInputChange("tag", text)}
            style={styles.input}
          />
          <TouchableOpacity onPress={submitForm} style={styles.button}>
            <Text style={styles.buttonText}>Submit Data</Text>
          </TouchableOpacity>
        </>
      ) : null}
      <TouchableOpacity onPress={logout} style={{ paddingVertical: 15 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="exit-outline" size={22} />
          <Text>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
      }  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5", 
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    width: 280,
    backgroundColor: "#fff", 
  },
  button: {
    padding: 15,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    marginLeft: 10,
    color: "#f00",
  },
});

export default Profile;
