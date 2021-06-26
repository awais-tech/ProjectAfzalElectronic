import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const CustomDrawner = () => {
  return (
    <View style={styles.col1}>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.logo}>Dashborad</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>All Products</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Order Products</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>All Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Block Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Agreement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>chat</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  loginBtn: {
    width: "80%",
    backgroundColor: "#465881",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    textAlign: "center",
    // fontSize: 20,
    // fontWeight: "bold",
  },

  logo: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 15,

    textAlign: "center",
  },
  col1: {
    backgroundColor: "#465881",
    flex: 5,

    borderRadius: 5,
    zIndex: 10,
  },
});
export default CustomDrawner;
