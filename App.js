import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import WelcomeScreen from "./screens/welcomeScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number"></Header>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
