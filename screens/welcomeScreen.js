import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import BTN from "../components/customButton";
import Card from "../components/customCard";
import Input from "../components/customInput";
const WelcomeScreen = (props) => {
  const [userInput, setUserInput] = useState("");
  const handleUserInput = (input) => {
    setUserInput(input.replace(/[^0-9]/g, ""));
  };
  const onReset = () => {
    console.log("rest clicked");
  };
  const onConfirm = () => {
    console.log("Confirm clicked");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.welcomeScreen}>
        <Card style={styles.card}>
          <Text>Welcome Screen</Text>

          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            value={userInput}
            onChangeText={handleUserInput}
          />
          <View style={styles.buttonView}>
            <BTN style={styles.reset} onBtnPress={onReset}>
              RESET
            </BTN>
            <BTN style={styles.confirm}>CONFIRM</BTN>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default WelcomeScreen;
