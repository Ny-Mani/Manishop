import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/Login";
import Home from "./screens/Home";


export default function App() {
  const Nav= createStackNavigator();

  return (
    <View  style={{flex:1}}>
      <NavigationContainer>
        <Nav.Navigator>
          <Nav.Screen  name="..PRICE TIME.." component={Login}/>
          <Nav.Screen  name="HomeScreen" component={Home}/>
        </Nav.Navigator>
      </NavigationContainer>

    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
