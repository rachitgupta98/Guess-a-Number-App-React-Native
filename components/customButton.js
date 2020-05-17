import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const BTN = (props) => {
  return (
    <TouchableOpacity onPress={props.onBtnPress} style={style.button}>
      <Text style={props.style}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    //borderColor: "grey",
    //backgroundColor: "yellow",
    //paddingRight: 20,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default BTN;
