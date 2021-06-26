import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Dashborad from "./Dashborad";
import Edit from "./Edit";
import Home from "./Home";
import Login from "./login";
const Starting = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate("Dashborad")}
      >
        <Text>Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate(Login)}
      >
        <Text>User</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#003f5c",
    justifyContent: "center",
    alignItems: "center",
  },
  tabItem: {
    width: "80%",
    borderRadius: 25,
    backgroundColor: "#fb5b5a",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    height: 40,
  },
});
export default Starting;
