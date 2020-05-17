import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={style.header}>
      <Text style={style.headerText}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    height: 80,
    width: "100%",
    backgroundColor: "#ffd452",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "200",
    color: "grey",
  },
});
export default Header;
