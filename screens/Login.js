import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


export default function Login({navigation}){

    const image = { uri: 'https://cdn.luxe.digital/media/2020/05/21140740/best-luxury-watch-brands-junghans-luxe-digital.jpg'};
    return(
        <View style={styles.container}>
              <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.loginButton}>
                </View>
                <View style={styles.registerButton}>
                </View>
              </ImageBackground>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    image: {
      flex: 1,
      justifyContent: "flex-end",
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    loginButton: {
        width: "50%i",
        height: 30,
        backgroundColor: "darksalmon",
        borderWidth: 1,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,

        
    },
    registerButton: {
        width: '50%',
        height: 30,
      color: "darksalmon",
        backgroundColor: "darksalmon",
        borderWidth: 1,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15

       
    }
  });