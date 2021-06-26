import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import DesignBtn from "./Button";
import { btnAB } from "./DataCollector/Data";

export default function Dashborad() {
  //Method 1
  // let btnA = [
  //   [
  //     { Name: "All Products", img: require("./Image/Productss.png") },
  //     { Name: "Aggrement", img: require("./Image/Aggrements.png") },
  //   ],
  //   [
  //     { Name: "Pending Orders", img: require("./Image/Pendings.png") },
  //     { Name: "All users", img: require("./Image/Alluserss.png") },
  //   ],
  //   [
  //     { Name: "Chat", img: require("./Image/Chats.png"), color: "white" },
  //     { Name: "Approve Orders", img: require("./Image/Orderss.png") },
  //   ],
  //   [
  //     { Name: "Home", img: require("./Image/Homes.png"), color: "red" },
  //     { Name: "Block Users", img: require("./Image/BlockUsers.png") },
  //   ],
  // ];

  // let ButtonsShow = () => {
  //   let viewButton = btnA.map((val, index) => {
  //     let RealB = val.map((val2, index) => {
  //       return <DesignBtn val2={val2} key={index} />;
  //     });
  //     return (
  //       <View style={styles.ctr} key={index}>
  //         {RealB}
  //       </View>
  //     );
  //   });
  //   return viewButton;
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <Text style={styles.logo}>Afzal</Text>
        <Text style={styles.logo}> Electronics</Text>
      </View>
      <FlatList
        data={btnAB}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 1,
            }}
          >
            <DesignBtn val2={item} />
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
  },
  // Input: {
  //   flex: 2,
  //   backgroundColor: "black",
  //   justifyContent: "center",
  // },
  logoView: {
    margin: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
  },

  Text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "right",
  },

  // ctr: {
  //   flex: 1,
  //   flexDirection: "row",
  // },
  btnT: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
