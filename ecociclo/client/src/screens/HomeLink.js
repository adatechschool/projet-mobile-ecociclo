import React from 'react'
import { TouchableOpacity, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import Buy from "./Buy";
import Recycle from "./Recycle"
import Favorite from "./Favorite"
import Profile from "./Profile"
import Home from './Home';
import ProductFilter from './ProductFilter';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createMaterialBottomTabNavigator()


const HomeStack = createNativeStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator>
     <HomeStack.Screen 
    name="Accueil" 
    component={Home} 
    options={{
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image 
            source={require('../../assets/login.jpg')}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    }}
  />
    </HomeStack.Navigator>
  );
}
const BuyStack = createNativeStackNavigator();

function BuyStackScreen() {
  return (
    <BuyStack.Navigator>
      <BuyStack.Screen name="J'achete ou Je récupère" component={Buy} />
    </BuyStack.Navigator>
  );
}
const RecycleStack = createNativeStackNavigator();

function RecycleStackScreen() {
  return (
    <RecycleStack.Navigator>
      <RecycleStack.Screen name="Je vends ou Je donne" component={Recycle} />
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

// const ProductFilterStack = createNativeStackNavigator();

// export function ProductFilterStackScreen(){
//   return (
//     <ProductFilterStack.Navigator>
//       <ProductFilterStack.Screen name="Mes Produit" component={ProductFilter}/>
//     </ProductFilterStack.Navigator>
//   )
// }



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
        // />
        // <Tab.Screen 
        //  name="Produit" 
        //    component={ProductFilterStackScreen}
        //    options={{
        //     visible:true
        // }}
/>

      </Tab.Navigator>

  )
}
