import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";

const Recycle = () => {
  const box = [
    { key: '1', backgroundColor: "#F5E8DA", text:'Furniture' },
    { key: '2', backgroundColor: "#A7B6D9", text:'Clothing'  },
    { key: '3', backgroundColor: "#B8C3D3", text:'Household appliances' },
    { key: '4', backgroundColor: "#9ABDAD", text:'Compost' },
  ];
  return (
    <View style={styles.container}>
     <Text>Recyclez proche de chez soi</Text>
    <FlatList
    
      data={box}
      renderItem={({ item }) => (
        <View style={[styles.box, { backgroundColor: item.backgroundColor}]}>
        <Text>{item.text}</Text>
        </View>
      )}
      numColumns={2}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.flatListContent}
    />
    </View>
  );
};

export default Recycle;


const screenWidth = Dimensions.get('window').width;
const boxWidth = (screenWidth - 40) / 2;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   marginTop: 20,
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
  },
  box: {
    height: boxWidth,
    width: boxWidth,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
