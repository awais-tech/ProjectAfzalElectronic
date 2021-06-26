import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Text style={styles.logo}>Sign Up</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="username..."
          placeholderTextColor="#003f5c"
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="email..."
          placeholderTextColor="#003f5c"
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="password..."
          placeholderTextColor="#003f5c"
          secureTextEntry
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="confirm password..."
          placeholderTextColor="#003f5c"
          secureTextEntry
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.sigUpBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.signUpText}>LOGIN</Text>
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
  },
  sigUpBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  signUpText: {
    color: "white",
  },
});
export default SignupScreen;
