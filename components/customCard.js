import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
});
export default Card;
