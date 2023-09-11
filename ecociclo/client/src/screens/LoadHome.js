import { View, StyleSheet, Text } from 'react-native'
import { useEffect } from 'react';


const LoadHome = ({navigation}) => {
  
  useEffect(() =>{
    // création d'un timeout
   setTimeout(() => {
    // naviguer vers la page Home
    navigation.navigate('Home');
  }, 3000)
  },[])

  
   
  return (
  
    <View style={styles.container}>
      <Text>
          ECOCICLO
      </Text>
    </View>
    
      
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2668B',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default LoadHome

