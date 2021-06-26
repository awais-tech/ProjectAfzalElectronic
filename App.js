import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import BottomTabMenu from "./screens/BottomTabMenu";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import FlashMessage from "react-native-flash-message";
import Starting from "./Component/Starting";
import Dashborad from "./Component/Dashborad";
import AllOrder from "./Component/AllOrder";
import Add from "./Component/Add";
import Home from "./Component/Home";
import HomeScreen from "./screens/HomeScreen";
import Edit from "./Component/Edit";
import Message from "./screens/Message";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <FlashMessage position="top" />
      <Stack.Navigator
        initialRouteName="Starting"
        screenOptions={{
          title: "",
          headerTintColor: "#fb5b5a",
          headerStyle: { backgroundColor: "#003f5c" },
        }}
      >
        <Stack.Screen name="Starting" component={Starting} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashborad" component={Dashborad} />
        <Stack.Screen name="AllOrder" component={AllOrder} />
        <Stack.Screen name="add" component={Add} />
        <Stack.Screen name="edit" component={Edit} />
        <Stack.Screen name="HomeA" component={HomeScreen} />
        <Stack.Screen name="chat" component={Message} />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabMenu}
          options={{
            title: "Logout",
            headerTintColor: "#fb5b5a",
            headerStyle: { backgroundColor: "#003f5c" },
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{
            title: "Back",
            headerTintColor: "#fb5b5a",
            headerStyle: { backgroundColor: "#003f5c" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
