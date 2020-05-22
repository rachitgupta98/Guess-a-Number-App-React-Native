import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const BTN = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onBtnPress}
      style={styles.button}
      accessibilityRole="button"
    >
      <Text style={props.style}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    alignItems: "center",
    margin: 10,
  },
});
export default BTN;
