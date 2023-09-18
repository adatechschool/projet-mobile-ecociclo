import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  FlatList,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import React, { useState, useEffect }  from "react";
import { box } from "./Recycle";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import { Fake } from "./DataFake";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ProductFilter = ({ route }) => {
  const {boxId, boxText} = route.params;
  console.log({boxId});
  console.log({boxText})

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [data, setData] = useState([]);
  const [selectCity, setSelectCity] = useState(null);
  const [filteredMarket, setFilteredMarket] = useState([]);
  
  useEffect(() => {

    async function ProductData() {
      try {
    // But your Ip address instead of localhost for your phone and the 
    //server to be on the same Ip and the phone to be able to access the server
    //
    console.log('hello');
        const response = await fetch("http://localhost:8000/api/data");
        // console.log(response);
    
        const jsondata = await response.json();
        setData(jsondata)
        console.log(setData);
      } catch (error) {
        console.log("There was an error", error);
        return []; // handlea filter error
      }
    }

  ProductData();
  }, []);
  

  
  const imageSource = 
    { 
    'Furniture':require('../../assets/meub.png'),
    'Clothing':require('../../assets/cloth.png'),
    'Household' : require('../../assets/elect3.png'),
    'Compost':require('../../assets/compost3.png'),
  };
  
  const selectedImageSource = imageSource[boxText] || null

  const sentence = 
  {
    'Furniture':"Points d'apport volontaire - Recycleries et ressourceries",
    'Clothing':"Points d'apport volontaire - Recycleries et ressourceries",
    'Household':"Points d'apport volontaire - Recycleries et ressourceries",
    'Compost':'Les marchés de proximité collectent vos déchets alimentaires',
  };
  
  const selectedSentence = sentence[boxText] || null

  const handleCitySelected = (city) => {
    const cityNumber = parseInt(city)
    const filteredData = data.filter((market) => market.ardt === cityNumber && market.tag ===boxText);
    setSelectCity(cityNumber);
    // console.log(filteredData);
    setFilteredMarket(filteredData);
        // console.log('selectCity:',cityNumber);


  }

  return (
    <View style={styles.container}>
      <View style={styles.Maintitle}>
          <Text style={{fontSize:30}}> {boxText} </Text>
          
          {selectedSentence && (
                      <Text style={{fontSize:20, margin: 10, textAlign: 'center'}}>
                        {selectedSentence}
                      </Text>
                      
                    )}
      </View>

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Cliquer"
              underlineColorAndroid="transparent"
              right={
                <TextInput.Icon
                  color="purple"
                  icon={isMenuVisible ? "menu-up" : "menu-down"}
                  size={50}
                  onPress={() => setIsMenuVisible(!isMenuVisible)}
                />
              }
            />

            {isMenuVisible && (
              <View style={styles.Menu}>
                <Picker
                  selectedValue={selectCity}
                  onValueChange={(itemValue) => handleCitySelected(itemValue)}
                >
                  <Picker.Item label="1er arrondissement" value={1} />
                  <Picker.Item label="2e arrondissement" value={2} />
                  <Picker.Item label="3e arrondissement" value={3} />
                  <Picker.Item label="4e arrondissement" value={4} />
                  <Picker.Item label="5e arrondissement" value={5} />
                  <Picker.Item label="6e arrondissement" value={6} />
                  <Picker.Item label="7e arrondissement" value={7} />
                  <Picker.Item label="8e arrondissement" value={8} />
                  <Picker.Item label="9e arrondissement" value={9} />
                  <Picker.Item label="10e arrondissement" value={10} />
                  <Picker.Item label="11e arrondissement" value={11} />
                  <Picker.Item label="12e arrondissement" value={12} />
                  <Picker.Item label="13e arrondissement" value={13} />
                  <Picker.Item label="14e arrondissement" value={14} />
                  <Picker.Item label="15e arrondissement" value={15} />
                  <Picker.Item label="16e arrondissement" value={16} />
                  <Picker.Item label="17e arrondissement" value={17} />
                  <Picker.Item label="18e arrondissement" value={18} />
                  <Picker.Item label="19e arrondissement" value={19} />
                  <Picker.Item label="20e arrondissement" value={20} />
                </Picker>
              </View>
            )}
          </View>

          <ScrollView>
            {filteredMarket.length > 0 ? (
              filteredMarket.map((post) => (
                <View style={styles.boxinfos} key={post._id}>
                  <Text style={styles.Title}>{post.nom}</Text>
                  <Text style={styles.text}>Ouverture: {post.ouverture}</Text>
                  <Text style={styles.text}>
                    Heure: {post.timeD}, {post.timeF}{" "}
                  </Text>
                  <Text style={styles.text}>Adresse: {post.adresse}</Text>
                  {/* <Button title="google map" color="grey" /> */}
                  <Button
    onPress={async () => {
        try {
            const favorites = await AsyncStorage.getItem("favorites");
            const parsedFavorites = favorites ? JSON.parse(favorites) : [];
            
            if (!parsedFavorites.some((fav) => fav._id === post._id)) {

                const recycleFavorite = {
                    ...post,
                    type: 'recycle'
                };

                parsedFavorites.push(recycleFavorite);
                await AsyncStorage.setItem(
                    "favorites",
                    JSON.stringify(parsedFavorites)
                );
            } else {
                console.log("You already added this item to favorites");
            }
        } catch (error) {
            console.error("Failed to save favorite:", error);
        }
    }}
    title="💙"
    color="grey"
/>
                </View>
              ))
            ) : (
              <View style={styles.container}>
                <Text style={{ fontSize: 20, margin: 20 }}>
                  On y est presque ......
                </Text>

                {selectedImageSource && (
                  <Image style={styles.images} source={selectedImageSource} />
                )}
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

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
      fontSize:20,
      alignItems:"center"
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
    },
    Maintitle: {
      display:'flex',
      marginTop: 30,
      fontSize: 40,
      fontWeight: 'bold',
      alignItems: 'center',
      textAlign: 'center'
      
    },
    images:{
      marginBottom: 0,
      width:395,
      height:365,
    }
    
  });
  
   

// const screenWidth = Dimensions.get("window").width;
// const boxWidth = (screenWidth - 40) / 2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   boxinfos: {
//     backgroundColor: "#F2C6C2",
//     minHeight: boxWidth / 1.5, // To Modify
//     width: boxWidth * 2,
//     margin: 10,
//     borderRadius: 5,
//     overflow: "visible",
//     padding: 10,
//   },
//   input: {
//     backgroundColor: "#B8C3D3",
//     multiline: "true",
//     width: boxWidth * 1.4,
//     margin: 20,
//     fontSize: 20,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     textAlign: "center",
//   },
//   inputContainer: {
//     width: boxWidth * 2,
//     alignItems: "center",
//     zIndex: 1,
//   },
//   Menu: {
//     backgroundColor: "#f8f8f8",
//     padding: 10,
//     position: "absolute",
//     top: 60,
//     width: boxWidth * 1.4,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   Title: {
//     fontSize: 40,
//   },
//   text: {
//     marginBottom: 5,
//   },
//   Maintitle: {
//     marginTop: 30,
//     fontSize: 40,
//     fontWeight: "bold",
//   },
//   images: {
//     marginBottom: 0,
//     width: 395,
//     height: 365,
//   },
// });

export default ProductFilter