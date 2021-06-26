import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import "firebase/firestore";
import configapp from "./../firebase";
const LoginScreen = ({ navigation }) => {
  let [Email, setEmail] = React.useState("");
  let [Password, setPassword] = React.useState("");

  let validation = () => {
    configapp
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .then((e) => {
        configapp
          .firestore()
          .collection("users")
          .doc(`${e.user.uid}`)
          .get()
          .then((snapshot) => {
            navigation.navigate("BottomTab");
          });
      })
      .catch((e) => {
        showMessage({
          message: e.message,
          type: "info",
        });
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Text style={styles.logo}>Afzal</Text>
        <Text style={styles.logo}> Electronics</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
          value={Email}
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
          value={Password}
        ></TextInput>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => validation()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
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
  logoView: {
    marginBottom: 40,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",

    padding: 10,
    marginBottom: 20,
  },
  inputText: {
    height: 50,
    color: "white",
    justifyContent: "center",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    // fontSize: 20,
    // fontWeight: "bold",
  },
});
export default LoginScreen;
