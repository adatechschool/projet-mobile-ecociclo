import { StyleSheet, Text, FlatList, View} from 'react-native'
import React from 'react'
import {box} from './Recycle'






const ProductFilter = ({route, navigation}) => {
  const {boxId} = route.params;
  console.log({boxId});

  const titleById = (id) => {
    
    const item = box.find(item => item.key == id );
    console.log(item);
    if (item){
      return <Text>{item.text}</Text>
    } else{
      return <Text>Pas de titre</Text>
    }
  }




  return (
    
    <View>
     
      <Text>
        {titleById(boxId)}
      </Text>
    </View>
    // <FlatList
    //   data = {box}
    //   renderItem={({item})=>
    //   <Text>{item.text}</Text>}
    //   KeyExtractor={(item)=> item}
    // >
      
    // </FlatList>
  )
}

export default ProductFilter

const styles = StyleSheet.create({})