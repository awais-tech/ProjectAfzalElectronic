import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.center}>
          <View style={styles.col1}>
            <Image
              style={styles.img}
              source={require("../assets/img/profile1.jpg")}
            />
          </View>
          <View style={styles.col2}>
            <Text style={styles.title}>M.Azmat-Ul-Khan</Text>
            <Text style={styles.white}>03158579088</Text>
            <Text style={styles.white}>m.azmatkhan29@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.txt}>Account Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.txt}>Address Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.txt}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.txt}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.txt}>Help</Text>
        </TouchableOpacity>
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
  header: {
    flex: 3,
    width: "90%",
    marginTop: 10,
    backgroundColor: "#fb5b5a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  center: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  col1: {
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  col2: {
    flex: 2,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  white: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  body: {
    flex: 7,
    width: "90%",
    marginTop: 10,
    // padding: 10,
    justifyContent: "space-around",
    borderRadius: 15,
  },
  txt: {
    color: "#fb5b5a",
    fontSize: 20,
    fontWeight: "bold",
  },
  option: {
    width: "100%",
    backgroundColor: "#465881",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AccountScreen;
