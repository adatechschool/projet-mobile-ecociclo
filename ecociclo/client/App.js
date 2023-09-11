import { NavigationContainer } from '@react-navigation/native';
import HomeLink from './src/screens/HomeLink';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';

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
     <HomeLink/>
   </NavigationContainer>
  );
}


