import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const DesignBtn = ({ val2 }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.btn1}
      onPress={() => navigation.navigate(val2.route)}
    >
      <Image source={val2.img} style={styles.img} tintColor={val2.color} />
      <Text name="1" style={styles.btnT}>
        {val2.name}
      </Text>
    </TouchableOpacity>
  );
};

export default DesignBtn;
const styles = StyleSheet.create({
  btn1: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fb5b5a",
    borderWidth: 3,
    borderColor: "pink",
    color: "black",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,

    marginVertical: 3,
    marginHorizontal: 3,
    paddingVertical: 8,
  },

  btnT: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#465881",
  },
  img: {
    marginVertical: 4,
    width: "80%",
    height: 100,
    backgroundColor: "#fb5b5a",
    resizeMode: "contain",
  },
});
