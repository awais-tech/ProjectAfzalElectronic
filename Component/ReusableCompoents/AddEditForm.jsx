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

const AddEdit = () => {
  return (
    <>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name..."
          placeholderTextColor="#003f5c"
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Brand Name..."
          placeholderTextColor="#003f5c"
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="RetailPrice..."
          placeholderTextColor="#003f5c"
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="SalePrice..."
          placeholderTextColor="#003f5c"
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Disscounted Price..."
          placeholderTextColor="#003f5c"
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Disscounted Price End Date..."
          placeholderTextColor="#003f5c"
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="VendorName..."
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Category..."
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Sub Category..."
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Quantity..."
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Date of Purchase..."
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputViewDes}>
        <TextInput
          style={styles.inputTextDes}
          placeholder="Description..."
          placeholderTextColor="#003f5c"
          multiline={true}
          maxLength={40}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={{
          width: "40%",
          height: 20,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fb5b5a",
          height: 50,
          borderRadius: 25,
        }}
      >
        <Text>Upload Image</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
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
  inputViewDes: {
    width: "80%",
    backgroundColor: "#465881",
    height: 100,
    borderRadius: 25,
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,
  },
  inputTextDes: {
    height: 100,
    color: "white",
  },
});
export default AddEdit;
