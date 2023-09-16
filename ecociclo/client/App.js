import * as SplashScreen from "expo-splash-screen";
import { useEffect, useContext } from "react";
import { AppRegistry } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNav from "./src/navigation/AppNav";
import {AuthProvider} from "./src/context/AuthContext";
import { name as appName } from './app.json';


AppRegistry.registerComponent(appName, () => App);

async function setupSplashScreen() {
  try {
    console.log("splash screen");

    await SplashScreen.preventAutoHideAsync();
    console.log("Attendre 3 secondes");

    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("reveler splash screen");

    await SplashScreen.hideAsync();
    console.log("Splash screen caché");
  } catch (error) {
    console.warn(error);
  }
}

export default function App() {
 
  useEffect(() => {
    setupSplashScreen();
  }, []);
  

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
    //   <NavigationContainer>
    //    <HomeLink/>

    //  </NavigationContainer>
  );
}
