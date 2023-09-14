import { StyleSheet, Image, Text, View, FlatList, Dimensions, TouchableOpacity } from "react-native";
import market from'../../assets/market.png'
import React from "react";

const Recycle = ({ navigation }) => {
  const box = [
    { key: '1', backgroundColor: "#F2C6C2", text: 'Acheter ou Récupérer', tag: 'Buy' },
    { key: '2', backgroundColor: "#32A89C", text: 'Donner ou Vendre', tag: 'Recycle' }
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontSize:25}}>Faîtes des heureux </Text >
        {/* <Text style={{fontSize:25}}>Donnez, vendez et faîtes des heureux</Text>  */}
      </View>
     
    <FlatList
    
      data={box}
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={() => navigation.navigate(item.tag === 'Buy' ? 'Buy' : 'Recycle',{
          boxId: item.key,
          boxText: item.text
        })}
      >
        <View style={[styles.box,styles.shadowProp, { backgroundColor: item.backgroundColor}]}>
        <Text style={{fontSize:23}}>{item.text}</Text>
        </View>
        </TouchableOpacity> 
      )}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.flatListContent}
    />
    <View>
        <Image
          style={styles.market}
          source={market}
        />
    </View>

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
    marginTop:30,

  },
  box: {
  
    height: boxWidth / 2.5,
    width: boxWidth,
    margin:20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    
  },
  title: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 18,
    
  },
  shadowProp: {
    shadowColor: 'gray',
    shadowOffset: { width: -2, height: 20 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  market:{
    width:390,
    height:160,
  }
  
});
