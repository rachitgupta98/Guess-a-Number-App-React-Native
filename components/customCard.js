import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View {...props} style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    //elevation: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});
export default Card;
