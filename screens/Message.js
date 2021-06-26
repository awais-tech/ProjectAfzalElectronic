import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MessageTab from "./MessageTab";

const Message = () => {
  return (
    <View style={styles.container}>
      <MessageTab />
      <View style={styles.body}>
        <Text>Message...</Text>
      </View>
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
  body: {
    flex: 9,
    justifyContent: "center",
  },
});
export default Message;
