import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
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
      <HomeStack.Screen name="Accueil" component={Home} />
    </HomeStack.Navigator>
  );
}
const BuyStack = createNativeStackNavigator();

function BuyStackScreen() {
  return (
    <BuyStack.Navigator>
      <BuyStack.Screen name="J'achete" component={Buy} />
    </BuyStack.Navigator>
  );
}
const RecycleStack = createNativeStackNavigator();

function RecycleStackScreen() {
  return (
    <RecycleStack.Navigator>
      <RecycleStack.Screen name="Je vends ou je donne" component={Recycle} />
    </RecycleStack.Navigator>
  );
}
const FavoriteStack = createNativeStackNavigator();

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Mes Favoris" component={Favorite} />
    </FavoriteStack.Navigator>
  );
}

export default function HomeLink() {
  return (
   
   

      <Tab.Navigator 
      activeTintColor='purple' 
      inactiveTintColor='green' 
      barStyle={{ backgroundColor: '#F2C6C2'}}
      
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{
            tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={24}/>
            ),
        }}/>
        <Tab.Screen name="Acheter" component={BuyStackScreen}      options={{
            tabBarIcon: ({ color }) => (
                <Icon name="shopping" color={color} size={24} />
            ),
        }}/>
       <Tab.Screen 
          name="Recycler" 
          component={RecycleStackScreen}
          options={{
         tabBarIcon: ({ color }) => (
               <Icon name="recycle" color={color} size={24} />
        ),
         }}
        />
        <Tab.Screen 
         name="Favoris" 
           component={FavoriteStackScreen}
           options={{
           tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={24} />
           ),
        }}
/>

      </Tab.Navigator>

  
  )
}
