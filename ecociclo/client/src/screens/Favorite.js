import { View, Text, FlatList, Button } from 'react-native';
import React,{useEffect, useState}from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Favorite = ({ route, navigation }) => {
  const postFavorite = route?.params?.postFavorite || [];
  // const postFavorite = route.params.postFavorite;
  const [favorites, setFavorites] = useState([]);

    // console.log(postFavorite);
    useEffect(() => {
      async function fetchFavorites() {
        try {
          const storedFavorites = await AsyncStorage.getItem('favorites');
          const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
          setFavorites(parsedFavorites);
        } catch (error) {
          console.error("Failed to fetch favorites:", error);
        }
      }
  
      fetchFavorites();
      const refreshFavorites = navigation.addListener('focus', fetchFavorites);

      return () => {
        refreshFavorites.remove();  // avoid memory leaks
      };
    }, [navigation]);
    async function clearStorage() {
      try {
        await AsyncStorage.clear();
        console.log('Storage successfully cleared!');
        setFavorites([]);
      } catch (e) {
        console.error('Failed to clear the async storage.', e);
      }
    }
    
  return (
    
    favorites.length > 0 ? (
      <><Button title="Clear Favorites" onPress={clearStorage} />
      <FlatList
        data={favorites}
        renderItem={({ item }) => (

          <View>
            <Text>{item.nom}</Text>
            <Text>Ouverture : {item.ouverture}</Text>
            <Text>Heure : {item.timeD}, {item.timeF}</Text>
            <Text>Adresse : {item.adresse}</Text>
          </View>
        )} />
        </>
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pas de favoris</Text>
      </View>
    )
  );
};

export default Favorite;
