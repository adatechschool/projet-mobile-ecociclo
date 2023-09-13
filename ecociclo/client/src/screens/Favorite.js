import { View, Text, FlatList } from 'react-native'
import React from 'react'
const Favorite = ({route}) => {
  const  postFavorite  = route.params;
  const tab = []
  console.log(postFavorite);
  return (
    // <FlatList
      // data={postFavorite}
      // renderItem={({ item }) => (
        <View>
          <Text>{postFavorite.nom}</Text>
          <Text>Ouverture : {postFavorite.ouverture}</Text>
          <Text>Heure : {postFavorite.timeD}, {postFavorite.timeF}</Text>
          <Text>Adresse : {postFavorite.adresse}</Text>
        </View>
      // )}
      // />
  )
}
export default Favorite