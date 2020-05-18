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
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 15,
    color: "white",
  },
});
export default NumberC;
