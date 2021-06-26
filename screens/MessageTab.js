import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const MessageTab = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabItemText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabItemText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabItemText}>Order</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fb5b5a",
    width: "90%",
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 10,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabItemText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default MessageTab;
