import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NumberC = (props) => {
  return (
    <View style={styles.numContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  numContainer: {
    borderWidth: 2,
    borderColor: "#ffd452",
    //backgroundColor: "#ffd452",
    //color: "grey",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 15,
    color: "grey",
  },
});
export default NumberC;
