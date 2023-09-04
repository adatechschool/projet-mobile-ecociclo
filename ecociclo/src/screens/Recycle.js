import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
// import { Icon } from '@rneui/themed';

const Recycle = () => {
  const box = [
    { key: '1', backgroundColor: "#F5E8DA", text:'Furniture', icon:'sofa-single'},
    { key: '2', backgroundColor: "#A7B6D9", text:'Clothing', icon: 'tshirt-crew' },
    { key: '3', backgroundColor: "#B8C3D3", text:'Household appliances',icon:'washing-machine'},
    { key: '4', backgroundColor: "#9ABDAD", text:'Compost' ,icon:'flower'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.title}>
         <Text style={{fontSize:20}}>Recyclez proche de chez soi</Text>
      </View>
    
    <FlatList
    
      data={box}
      renderItem={({ item }) => (
        <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
            <Icon name={item.icon} size={50} color={'#4C4A59'}/>
            {/* <Text>{item.text}</Text> */}
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
    // flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
    height: '80%',
  },
  box: {
    height: boxWidth,
    width: boxWidth,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
