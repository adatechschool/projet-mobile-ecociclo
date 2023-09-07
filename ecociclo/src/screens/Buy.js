import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Keyboard, Button} from "react-native";
import React, { useState, useEffect } from "react";
import{Picker} from "@react-native-picker/picker"
import { TextInput } from "react-native-paper";
import {Fake} from "./DataFake"

// async function Hello() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("There was an error", error);
//   }
// }

const Buy = () => {
  // const [data, setData] = useState(null);
  

  // useEffect(() => {
  //   Hello().then((responseData) => setData(responseData));
  // }, []);
  
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [allData, setAllData] = useState(Fake);
  const [selectCity, setSelectCity] = useState(null);
  const [filteredMarket, setFilteredMarket] = useState([]);

  const handleCitySelected = (city) => {
    const cityNumber = parseInt(city)
    const filteredData = allData.filter(market => market.ardt === cityNumber);
    setSelectCity(cityNumber);
    setFilteredMarket(filteredData);
        console.log('selectCity:',cityNumber);


  }
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
    
        <TextInput
          style={styles.input}
          placeholder="Choisir l'arrondissement"
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
            <Picker
              selectedValue = {selectCity}
              onValueChange = {(itemValue) => handleCitySelected(itemValue)}
            >
              <Picker.Item label = "1er arrondissement" value={1}/>
              <Picker.Item label = "2e arrondissement" value= {2}/>
              <Picker.Item label = "3e arrondissement" value= {3}/>
              <Picker.Item label = "4e arrondissement" value= {4}/>
              <Picker.Item label = "5e arrondissement" value= {5}/>
              <Picker.Item label = "6e arrondissement" value= {6}/>
              <Picker.Item label = "7e arrondissement" value= {7}/>
              <Picker.Item label = "8e arrondissement" value= {8}/>
              <Picker.Item label = "9e arrondissement" value= {9}/>
              <Picker.Item label = "10e arrondissement" value= {10}/>
              <Picker.Item label = "11e arrondissement" value= {11}/>
              <Picker.Item label = "12e arrondissement" value= {12}/>
              <Picker.Item label = "13e arrondissement" value= {13}/>
              <Picker.Item label = "14e arrondissement" value= {14}/>
              <Picker.Item label = "15e arrondissement" value= {15}/>
              <Picker.Item label = "16e arrondissement" value= {16}/>
              <Picker.Item label = "17e arrondissement" value= {17}/>              
              <Picker.Item label = "18e arrondissement" value= {18}/>
              <Picker.Item label = "19e arrondissement" value= {19}/>
              <Picker.Item label = "20e arrondissement" value= {20}/>
            </Picker>
          </View>
        )}        
        </View>
        
        <ScrollView>
          {filteredMarket.length > 0 ? (
            filteredMarket.map((post)=> (
              <View style={styles.boxinfos} key={post.id}>
                <Text style={styles.Title}>{post.nom}</Text>
                <Text style={styles.text}>Ouverture: {post.ouverture}</Text>
                <Text style={styles.text}>Heure: {post.timeD }, {post.timeF} </Text>
                <Text style={styles.text}>Adresse: {post.adresse}</Text>
                <Button 
                title="google map"
                color='grey'
                />
              </View>
            ))
          ) : (
            <Text>On y est presque ...</Text>
        
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
  boxinfos: {
    backgroundColor: "#F2C6C2",
    minHeight: boxWidth / 1.5, // To Modify
    width: boxWidth * 2,
    margin: 10,
    borderRadius: 5,
    overflow:"visible",
    padding:10,
  },
  input: {
    backgroundColor: "#B8C3D3",
    multiline: "true",
    width: boxWidth * 1.4,
    margin:20,
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
  Title:{
    fontSize:20,
  
  },
  text:{
    marginBottom:5,
  }
  
});
