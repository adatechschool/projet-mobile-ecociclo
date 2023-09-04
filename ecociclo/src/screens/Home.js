import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

import React from "react";

const Recycle = () => {
  const box = [
    { key: '1', backgroundColor: "#F2C6C2", text:'Acheter' },
    { key: '2', backgroundColor: "#32A89C", text:'Recycler'  }
  ];
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Acheter, récuperer vos nouvelles pépites</Text >
        <Text style={styles.text}>Donner, vender et faîtes des heureux</Text> 
      </View>
     
    <FlatList
    
      data={box}
      renderItem={({ item }) => (
        <View style={[styles.box,styles.shadowProp, { backgroundColor: item.backgroundColor}]}>
        <Text>{item.text}</Text>
        </View>
      )}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.flatListContent}
    />
    </View>
  );
};

export default Recycle;


const screenWidth = Dimensions.get('window').width;
const boxWidth = (screenWidth - 40);

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
  },
  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80%',
  },
  box: {
    height: boxWidth / 2.5,
    width: boxWidth,
    margin:15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 18,
    
  },
  shadowProp: {
    shadowColor: 'green',
    shadowOffset: { width: -2, height: 20 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // This is for Android
  },
  
});
