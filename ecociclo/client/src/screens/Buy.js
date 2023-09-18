import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import adress4 from "../../assets/adress4.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import {Fake} from "./DataFake"

async function Hello() {
  try {
    // But your Ip address instead of localhost for your phone and the
    //server to be on the same Ip and the phone to be able to access the server
    //
    const response = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/marches-decouverts/records?limit=100");
    const data = await response.json();
    // console.log(data);
    let result = data["results"]
    // console.log(result);
    return result;

  } catch (error) {
    console.log("There was an error", error);
    return []; // handlea filter error
  }
}

const Buy = ({ navigation }) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    Hello().then((responseData) => setResult(responseData));
  }, []);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  // const [allData, setAllData] = useState(Fake);

  const [selectCity, setSelectCity] = useState(null);
  const [filteredMarket, setFilteredMarket] = useState([]);

  const handleCitySelected = (city) => {
    const cityNumber = parseInt(city);
    
    const filteredData = result.filter((market) => parseInt(market.ardt) === cityNumber);
    console.log(filteredData);
    setSelectCity(cityNumber);
    setFilteredMarket(filteredData);
    console.log("selectCity:", cityNumber);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setIsMenuVisible(false)}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 25 }}>Selectionner un arrondissement </Text>
        </View>
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
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
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
            </TouchableWithoutFeedback>
          )}
        </View>

        <ScrollView>
          {filteredMarket.length > 0 ? (
            filteredMarket.map((post) => (
              <View style={styles.boxinfos} key={post.id_marche}>
                <Text style={styles.Title}>{post.nom_long}</Text>
                <Text style={styles.text}>Ouverture: {post.jours_tenue}</Text>
                <Text style={styles.text}>
                  Heure: {post.h_deb_sem_1}, {post.h_fin_sem_1}{" "}
                </Text>
                <Text style={styles.text}>Adresse: {post.localisation}</Text>

                {/* <Button onPress={() => {
                  console.log(post)
                  navigation.navigate('Favorite', {
                    postFavorite: [post]
                  });
                }} 
                title="💙"
              color="grey" 
              /> */}

                <Button
                  onPress={async () => {
                    try {
                      const favorites = await AsyncStorage.getItem("favorites");
                      const parsedFavorites = favorites
                        ? JSON.parse(favorites)
                        : [];
                      if (
                        !parsedFavorites.some((fav) => fav.id_marche === post.id_marche)
                      ) {
                        const marketFavorite = {
                          ...post,
                          type: 'market'
                      };
                        parsedFavorites.push(marketFavorite);
                        await AsyncStorage.setItem(
                          "favorites",
                          JSON.stringify(parsedFavorites)
                        );
                      } else {
                        console.log("You already add this adress to favorites");
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
                On y est presque ...
              </Text>

              <Image style={styles.adress} source={adress4} />
            </View>
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
    overflow: "visible",
    padding: 10,
  },
  input: {
    backgroundColor: "#B8C3D3",
    multiline: "true",
    width: boxWidth * 1.4,
    fontSize: 20,
    margin: 20,
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
  Title: {
    fontSize: 20,
  },
  text: {
    marginBottom: 5,
  },
  title: {
    marginTop: 30,
    fontWeight: "bold",
  },
  adress: {
    width: 370,
    height: 350,
  },
});
