import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import jwt_decode from "jwt-decode";

const Profile = () => {
    const {logout, userToken} = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState(null);

    const getIDfromToken = (token) => {
      try {
        const decoded = jwt_decode(token);
        return decoded.id;
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    }

    useEffect(() => {
      const fetchData = async () => {
        const userId = getIDfromToken(userToken);
        try {
          const response = await fetch(`http://localhost:8000/user/${userId}`);
          const data = await response.json();
          setUserInfo(data);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }

      fetchData();
    }, [userToken]);
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {userInfo ? (
            <>
              <Text>{userInfo.username}</Text>
              <Text>{userInfo.email}</Text>
              {/* Add other user attributes you wish to display */}
            </>
          ) : (
            <Text>Loading user information...</Text>
          )}

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

export default Profile;
