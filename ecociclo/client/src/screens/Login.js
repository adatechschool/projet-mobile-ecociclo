import React, { useContext } from 'react';
import { StyleSheet, View, ImageBackground, TextInput, Button, Dimensions, Text } from 'react-native';
import Login from "../../assets/login2.jpg";
import { AuthContext } from '../context/AuthContext';
// import FastImage from 'react-native-fast-image';

export default function LoginScreen() {
    const {login} = useContext(AuthContext)
    return (
        
        <ImageBackground source={Login} style={styles.backgroundImage} resizeMode='cover'>
        <View style={styles.container}>
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
            <Button title="Login" onPress={login} />
        </View>
    </ImageBackground>
    );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)' // Optional: adds a semi-transparent overlay
    },
    backgroundImage: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
        backgroundColor: 'white'
    }
});

