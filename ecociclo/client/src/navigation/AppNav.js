import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeLink from "../screens/HomeLink";
import ProductFilter from "../screens/ProductFilter";
import Favorite from "../screens/Favorite";
import Buy from "../screens/Buy";
import Recycle from "../screens/Recycle";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import { AuthContext } from "../context/AuthContext";
import { View, ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
const Stack = createNativeStackNavigator();

const AppNav = () => {
  const { isloading, userToken } = useContext(AuthContext);

  if (isloading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? (
        <Stack.Navigator initialRouteName="HomeTab">
          <Stack.Screen
            name="HomeTab"
            component={HomeLink}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Produit" component={ProductFilter} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Favorite" component={Favorite} />
          <Stack.Screen name="Buy" component={Buy} />
          <Stack.Screen name="Recycle" component={Recycle} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerTitle: "Register" }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNav;
