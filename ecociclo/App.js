// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoadHome from './src/screens/LoadHome';
import Home from './src/screens/Home';
import { View} from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';

const Stack =  createNativeStackNavigator()

async function setupSplashScreen(){
  try{
    console.log('splash screen');

    await SplashScreen.preventAutoHideAsync();
    console.log('Attendre 3 secondes');

    await new Promise(resolve => setTimeout(resolve,3000));
    console.log('reveler splash screen');

    await SplashScreen.hideAsync();
    console.log('Splash screen caché');


  } catch(error){
    console.warn(error)
  }
}

export default function App() {
  useEffect(() => {
    setupSplashScreen()
  }, []);

  return (
   

    <NavigationContainer>
     <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}/>

     </Stack.Navigator>
   </NavigationContainer>
  );
}


