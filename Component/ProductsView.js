import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

const ProductView = ({ product, navigation }) => {
  const { title, price, img } = product;
  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        <Image style={styles.img} source={img} />
      </View>
      <View style={styles.col2}>
        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.col1}>
            <Text style={styles.price}>Rs. {price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.col3}>
        <TouchableOpacity style={styles.co}>
          <Text style={styles.loginText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    flexDirection: "row",
  },
  img: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    borderRadius: 200,
    resizeMode: "contain",

    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
  },
  body: {
    width: "90%",
    alignItems: "flex-start",
    paddingTop: 5,
  },
  title: {
    color: "#fb5b5a",
    fontWeight: "bold",
  },
  price: {
    color: "white",
  },

  col1: {
    flex: 2,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  col2: {
    flex: 3,
    margin: 20,
  },
  col3: {
    flex: 2,
    // backgroundColor: "#fb5b5a",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  co: {
    backgroundColor: "#fb5b5a",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  loginText: {
    color: "white",
  },
});
export default ProductView;
