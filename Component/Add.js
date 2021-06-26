import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollViewBase,
  ScrollView,
} from "react-native";

import CustomDrawner from "./CustomDrawner";
import AddEdit from "./ReusableCompoents/AddEditForm";

const Add = () => {
  return (
    <ScrollView>
      <View style={styles.row}>
        <View style={styles.container}>
          <View style={styles.logoView}>
            <Text style={styles.logos}> Add Products</Text>
          </View>
          <AddEdit />

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Add Produdct</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 13,
  },
  logoView: {
    marginBottom: 40,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
  },
  logos: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fb5b5a",
    marginTop: 15,
  },

  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    // fontSize: 20,
    // fontWeight: "bold",
  },
});
export default Add;
