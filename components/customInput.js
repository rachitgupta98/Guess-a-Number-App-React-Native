import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
  },
});
export default Input;
