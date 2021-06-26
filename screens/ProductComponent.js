import React from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductComponent = ({ product }) => {
  const { title, price, img } = product;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={styles.price}>Rs. {price}</Text>
          </View>
          <View style={styles.col2}>
            <Button
              color="#fb5b5a"
              title="Detail"
              onPress={() => navigation.navigate("ProductDetail", product)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  img: {
    width: "90%",
    height: 200,
    backgroundColor: "white",
    resizeMode: "contain",
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
  row: {
    width: "100%",
    flexDirection: "row",
  },
  col1: {
    flex: 2,
  },
  col2: {
    flex: 1,
  },
});
export default ProductComponent;
