import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Account from "./Account";
import { useNavigation } from "@react-navigation/native";
import Login from "./login";
import Message from "./Message";

const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabItemText}>Installments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => {
          navigation.navigate(Message);
          console.log(navigation);
        }}
      >
        <Text style={styles.tabItemText}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabItemText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#465881",
    width: "100%",
    flexDirection: "row",
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabItemText: {
    color: "#fb5b5a",
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default BottomTab;
