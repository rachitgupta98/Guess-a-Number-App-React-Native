import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import BTN from "../components/customButton";
const WelcomeScreen = (props) => {
  return (
    <View style={style.welcomeScreen}>
      <Text>Welcome Screen</Text>
      <TextInput />
      <View style={style.buttonView}>
        <BTN style={style.reset}>RESET</BTN>
        <BTN style={style.confirm}>CONFIRM</BTN>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    padding: 10,
  },
  reset: {
    color: "red",
  },
  confirm: {
    color: "green",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default WelcomeScreen;
