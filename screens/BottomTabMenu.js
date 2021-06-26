import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Message from "./Message";
import AccountScreen from "./AccountScreen";

const Tab = createBottomTabNavigator();

const BottomTabMenu = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fb5b5a",
        inactiveTintColor: "white",
        activeBackgroundColor: "#003f5c",
        inactiveBackgroundColor: "#003f5c",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabMenu;
