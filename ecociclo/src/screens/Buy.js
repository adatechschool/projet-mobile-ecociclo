import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Keyboard, Button} from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-paper";
import {Fake} from "./DataFake"

async function Hello() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("There was an error", error);
  }
}

const Buy = () => {
  const [data, setData] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    Hello().then((responseData) => setData(responseData));
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
    
          <TextInput
            style={styles.input}
            placeholder="Type something..."
            underlineColorAndroid="transparent" 
            right={
              <TextInput.Icon 
                color="purple" 
                icon={isMenuVisible ? "menu-up" : "menu-down"}  
                size={40} 
                onPress={() => setIsMenuVisible(!isMenuVisible)} 
              />
            }
          />
 

        {isMenuVisible && (
          <View style={styles.Menu}>
            <Text>1er arrondissement</Text>
            <Text>2e arrondissement</Text>
            <Text>3e arrondissement</Text>
          </View>
        )}
      </View>
      <ScrollView>
        {data ? (
          data.map((post) => (
            <View style={styles.post} key={post.id}>
              <Text>{post.nom}</Text>
              <Text>ouverture: {post.ouverture}</Text>
              <Text>heure: {post.timeD }, {post.timeF} </Text>
              <Text>adresse: {post.adresse}</Text>
              <Button 
              title="google"
              />
              
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default Buy;

const screenWidth = Dimensions.get("window").width;
const boxWidth = (screenWidth - 40) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  post: {
    backgroundColor: "pink",
    height: boxWidth / 2,
    width: boxWidth * 2,
    margin: 10,
    borderRadius: 5,
    overflow: "scroll",
  },
  input: {
    backgroundColor: "#B8C3D3",
    multiline: "true",
    width: boxWidth * 1.4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  inputContainer: {
    width: boxWidth * 2,
    alignItems: "center",
    zIndex: 1,
  },
  Menu: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    position: "absolute",
    top: 60,
    width: boxWidth * 1.4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
