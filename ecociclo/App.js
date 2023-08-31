// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadHome from './src/screens/LoadHome';

const Stack =  createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Load" component={LoadHome}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}


