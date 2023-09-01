import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Buy from "./Buy";
import Recycle from "./Recycle"
import Favorite from "./Favorite"

const Tab = createMaterialBottomTabNavigator()

export default function Home() {
  return (
    <>
    <View >
      <Text>Home Page</Text>
    </View>
  
  <NavigationContainer independent="true">
      <Tab.Navigator>
        {/* <Tab.Screen name="HomeTab" component={Home}/> */}
        <Tab.Screen name="Acheter" component={Buy}/>
        <Tab.Screen name="Recycler" component={Recycle}/>
        <Tab.Screen name="Favoris" component={Favorite}/>
      </Tab.Navigator>
    </NavigationContainer>
  </>
  )
}