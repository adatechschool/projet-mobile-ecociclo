import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const {logout} = useContext(AuthContext)
  return (
    
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Page</Text>
          <TouchableOpacity onPress={logout} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
        </View>
      
    
  )
}

export default Profile