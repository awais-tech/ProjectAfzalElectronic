import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BottomTab from "./BottomTab";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchText}
          placeholder="Search..."
          placeholderTextColor="#003f5c"
        ></TextInput>
      </View>
      <View style={styles.body}>
        <Text>Product List...</Text>
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
  searchView: {
    width: "80%",
    backgroundColor: "#465881",
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    padding: 10,
    marginTop: 40,
    marginBottom: 10,
  },
  searchText: {
    height: 30,
    color: "white",
  },
  body: {
    flex: 7,
    justifyContent: "center",
  },
});
export default Home;
