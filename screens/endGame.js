import React from "react";
import { Text, StyleSheet, ImagePropTypes } from "react-native";
import Card from "../components/customCard";
const EndGame = (props) => {
  return (
    <Card elevation={5} style={styles.container}>
      <Text>{props.title}</Text>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 200,
    maxWidth: "80%",
  },
});
export default EndGame;
