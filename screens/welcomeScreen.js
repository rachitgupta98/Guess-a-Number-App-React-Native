import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import BTN from "../components/customButton";
import Card from "../components/customCard";
const WelcomeScreen = (props) => {
  return (
    <View style={styles.welcomeScreen}>
      <Card style={styles.card}>
        <Text>Welcome Screen</Text>

        <TextInput />
        <View style={styles.buttonView}>
          <BTN style={styles.reset}>RESET</BTN>
          <BTN style={styles.confirm}>CONFIRM</BTN>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    padding: 20,
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
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
});

export default WelcomeScreen;
