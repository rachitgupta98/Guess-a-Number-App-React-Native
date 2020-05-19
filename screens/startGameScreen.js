import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={style.btn}>
      <Button title="Start Game" onPress={props.onPress} />
    </View>
  );
};

const style = StyleSheet.create({
  btn: {
    marginVertical: 10,
  },
});
export default StartGameScreen;
