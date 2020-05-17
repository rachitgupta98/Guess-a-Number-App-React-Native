import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const CustomInput = (props) => {
  return (
    <View style={style.input}>
      <TextInput style={style.input} />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    flex: 1,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
