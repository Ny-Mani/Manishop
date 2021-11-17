import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Dimensions,
    FlatList,
    ImageBackground,
    Button,
  } from "react-native";
export default function Cart({ navigation }) {
    return (
 <View>
     <Button
        name="Proceed to checkout"
     >

     </Button>
 </View>
    );
  }
  
  const style = StyleSheet.create({
    searchContainer: {
      height: 40,
      backgroundColor: "#202020",
      borderRadius: 10,
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      padding: 6,
      marginRight: 20,
    },
    input: {
      fontSize: 18,
      color: "white",
      flex: 1,
      marginLeft: 5,
    },
  });
  