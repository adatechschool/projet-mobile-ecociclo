import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Favorite = ({ route, navigation }) => {
  const postFavorite = route?.params?.postFavorite || [];
  // const postFavorite = route.params.postFavorite;
  const [favorites, setFavorites] = useState([]);

  // console.log(postFavorite);
  useEffect(() => {
    async function fetchFavorites() {
      try {
        const storedFavorites = await AsyncStorage.getItem("favorites");
        const parsedFavorites = storedFavorites
          ? JSON.parse(storedFavorites)
          : [];
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error("Failed to fetch favorites:", error);
      }
    }

    fetchFavorites();
    const refreshFavorites = navigation.addListener("focus", fetchFavorites);

    // return () => {
    //   refreshFavorites.remove();
    // };
  }, [navigation]);
  async function clearStorage() {
    try {
      await AsyncStorage.clear();
      console.log("Storage successfully cleared!");
      setFavorites([]);
    } catch (e) {
      console.error("Failed to clear the async storage.", e);
    }
  }

  return favorites.length > 0 ? (
    <View style={styles.container}>
      <TouchableOpacity style={styles.clear} onPress={clearStorage} >
        <Text>Clear Favorites</Text>
      </TouchableOpacity>
      <FlatList
        data={favorites}
        renderItem={({ item }) => {
          if (item.type === "market") {
            return (
              <View style={styles.favoriteItem}>
                <Text style={styles.title}>{item.nom_long}</Text>
                <Text style={styles.detail}>
                  Ouverture : {item.jours_tenue}
                </Text>
                <Text style={styles.detail}>
                  Heure: {item.h_deb_sem_1}, {item.h_fin_sem_1}
                </Text>
                <Text style={styles.detail}>Adresse: {item.localisation}</Text>
              </View>
            );
          } else if (item.type === "recycle") {
            return (
              <View style={styles.favoriteItemRecycle}>
              <Text style={styles.title}>{item.nom}</Text>
              <Text style={styles.text}>Ouverture: {item.ouverture}</Text>
              <Text style={styles.text}>
                Heure: {item.timeD}, {item.timeF}{" "}
              </Text>
              <Text style={styles.text}>Adresse: {item.adresse}</Text>
              </View>
            );
          }
        }}
      />
    </View>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.emptyText}>Pas de favoris</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteItem: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#F2C6C2",
  },
  favoriteItemRecycle: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#32A89C",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detail: {
    fontSize: 16,
    marginVertical: 3,
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
  },
  clear: {
    margin:10,
    width: "50%",
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
  }
});

export default Favorite;
