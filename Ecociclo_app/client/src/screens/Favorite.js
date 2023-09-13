import { View, Text, FlatList } from 'react-native';
import React from 'react';

const Favorite = ({ route }) => {
  const postFavorite = route.params.postFavorite;
    // console.log(postFavorite);
  return (
    postFavorite && postFavorite.length ? (
      <FlatList
        data={postFavorite}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nom}</Text>
            <Text>Ouverture : {item.ouverture}</Text>
            <Text>Heure : {item.timeD}, {item.timeF}</Text>
            <Text>Adresse : {item.adresse}</Text>
          </View>
        )}
      />
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No favorites</Text>
      </View>
    )
  );
};

export default Favorite;
