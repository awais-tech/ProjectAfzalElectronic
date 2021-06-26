import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";

import ProductsView from "./ProductsView";

const AllOrder = ({ navigation }) => {
  const products = [
    {
      title: "TCL D3000 40 Full HD LED TV-Black",
      price: 38900,
      img: require("../assets/img/TCL-D3000.jpg"),
      brand: "TLC",
      installment: "Up to 18 months, as low as Rs. 2,741 per month.",
      quantity: 10,
      detail: `Inverex is well-known and reputed company since 2007. We have all international leading brands Voltronic Power, Risen Solar Technology and Fronius International GmbH.
      Inverex is Pakistan’s largest solar-based company. It imports many solar products including solar inverters, batteries, solar panels, solar street lights and offer customized solar solutions. We provide services to residential homeowners, large and small industries and government entities in Pakistan. Every year launch upgraded state-of-the-art and reliable solar products in the market.`,
    },
    {
      title: "Bx5D3 Active Studio Monitor 5",
      price: 40990,
      img: require("../assets/img/bs5d3-speaker.jpg"),
    },
    {
      title: "INVEREX INV-125 GD-Top Mount Glass Refrigerator",
      price: 37000,
      img: require("../assets/img/inverex-inv-125.jpg"),
      brand: "Inverxe",
      installment: "Up to 18 months, as low as Rs. 2,741 per month.",
      quantity: 10,
      detail: `Inverex is well-known and reputed company since 2007. We have all international leading brands Voltronic Power, Risen Solar Technology and Fronius International GmbH.
      Inverex is Pakistan’s largest solar-based company. It imports many solar products including solar inverters, batteries, solar panels, solar street lights and offer customized solar solutions. We provide services to residential homeowners, large and small industries and government entities in Pakistan. Every year launch upgraded state-of-the-art and reliable solar products in the market.`,
    },
    {
      title: "Dawlance Refrigerator 9191 Wide Body",
      price: 66000,
      img: require("../assets/img/dawlance-refrigerator-9191.png"),
    },
    {
      title: "Dawlance Refrigerator 9191 Wide Body",
      price: 66000,
      img: require("../assets/img/dawlance-refrigerator-9191.png"),
    },
    {
      title: "Dawlance Refrigerator 9191 Wide Body",
      price: 66000,
      img: require("../assets/img/dawlance-refrigerator-9191.png"),
    },
    {
      title: "Dawlance Refrigerator 9191 Wide Body",
      price: 66000,
      img: require("../assets/img/dawlance-refrigerator-9191.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.searchView}>
          <TextInput
            style={styles.searchText}
            placeholder="Search..."
            placeholderTextColor="#003f5c"
          ></TextInput>
        </View>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 1,
            }}
          >
            <ProductsView product={item} navigation={navigation} />
          </View>
        )}
        //Setting the number of column
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#003f5c",
    flex: 1,
  },
  container: {
    backgroundColor: "#003f5c",
    justifyContent: "center",
    alignItems: "center",
  },
  searchView: {
    width: "80%",
    backgroundColor: "#465881",
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  searchText: {
    height: 30,
    color: "white",
  },
  body: {
    flex: 1,
    width: "100%",
  },
});
export default AllOrder;
