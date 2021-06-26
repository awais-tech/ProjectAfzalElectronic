import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
} from "react-native";

const ProductDetailScreen = ({ route }) => {
  const {
    title,
    img,
    price,
    brand,
    installment,
    quantity,
    detail,
  } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.col1}>
          <Image style={styles.img} source={img} />
        </View>
        <View style={styles.col2}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.white}>Brand: {brand}</Text>
          <Text style={styles.white}>Rs: {price}</Text>
          <Text style={styles.white}>quantity: {quantity}</Text>
          <Button color="#fb5b5a" title="Buy" />
        </View>
      </View>
      <View style={styles.section2}>
        <Text style={styles.white}>Installment: {installment}</Text>
        <Text style={styles.title}>Details of {title}</Text>
        <Text style={styles.white}>{detail}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
  },
  section1: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#465881",
    width: "95%",
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  col1: {
    flex: 2,
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 250,
    resizeMode: "contain",
  },
  col2: {
    flex: 3,
    width: "100%",
    height: 250,
    padding: 10,
    justifyContent: "space-around",
  },
  title: {
    color: "#fb5b5a",
    fontWeight: "bold",
    fontSize: 20,
  },
  white: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  section2: {
    flex: 2,
    backgroundColor: "#465881",
    width: "95%",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    justifyContent: "space-around",
  },
});
export default ProductDetailScreen;
