import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Buy from "./Buy";
import Recycle from "./Recycle"
import Favorite from "./Favorite"
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createMaterialBottomTabNavigator()


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
const BuyStack = createNativeStackNavigator();

function BuyStackScreen() {
  return (
    <BuyStack.Navigator>
      <BuyStack.Screen name="Acheter" component={Buy} />
    </BuyStack.Navigator>
  );
}
const RecycleStack = createNativeStackNavigator();

function RecycleStackScreen() {
  return (
    <RecycleStack.Navigator>
      <RecycleStack.Screen name="Recycler" component={Recycle} />
    </RecycleStack.Navigator>
  );
}
const FavoriteStack = createNativeStackNavigator();

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favoris" component={Favorite} />
    </FavoriteStack.Navigator>
  );
}

export default function HomeLink() {
  return (
   
   

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Acheter" component={BuyStackScreen}/>
        <Tab.Screen name="Recycler" component={RecycleStackScreen}/>
        <Tab.Screen name="Favoris" component={FavoriteStackScreen}/>
      </Tab.Navigator>

  
  )
}

