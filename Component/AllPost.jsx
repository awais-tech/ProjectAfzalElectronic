import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AllPost = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#E9967A",
      }}
    >
      <Text>Title : {data.title}</Text>
      <Text>Body: {data.body}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#8B008B",
          width: "30%",
          height: 60,
          borderRadius: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Users", data)}
      >
        <Text style={{ fontWeight: "bold" }}>Click Me to View User detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AllPost;
