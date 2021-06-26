import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomTab from "./BottomTab";
import MessageTab from "./MessageTab";

const Message = () => {
  return (
    <View style={styles.container}>
      <MessageTab />
      <View style={styles.body}>
        <Text>Message...</Text>
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
  body: {
    flex: 7,
  },
});
export default Message;
