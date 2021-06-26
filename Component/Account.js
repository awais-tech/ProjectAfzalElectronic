import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomTab from "./BottomTab";

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> Profile</Text>
      </View>
      <View style={styles.body}>
        <Text>Profile Details...</Text>
      </View>
      <BottomTab />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 3,
    width: "90%",
    marginTop: 30,
    backgroundColor: "#fb5b5a",
    justifyContent: "flex-end",
    borderRadius: 15,
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    flex: 5,
    justifyContent: "center",
  },
});
export default Account;
