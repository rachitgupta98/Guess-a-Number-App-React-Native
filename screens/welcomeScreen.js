import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import BTN from "../components/customButton";
import Card from "../components/customCard";
import Input from "../components/customInput";
const WelcomeScreen = (props) => {
  const [userInput, setUserInput] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [finalValue, setFinalValue] = useState();
  const [chance, setChances] = useState(3);
  const handleUserInput = (input) => {
    setUserInput(input.replace(/[^0-9]/g, ""));
  };
  const onReset = () => {
    setUserInput("");
    setConfirm(false);
  };
  const onConfirm = () => {
    let chosenNum = parseInt(userInput);
    if (isNaN(chosenNum) || chosenNum <= 0) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99.",
        [{ text: "OK", style: "destructive", onPress: onReset }]
      );
    }
    setFinalValue(chosenNum);
    setConfirm(true);
    setUserInput("");
  };
  let selectedNumber;
  if (confirm) {
    selectedNumber = <Text>You Select : {finalValue}</Text>;
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.welcomeScreen}>
        <Card style={styles.card}>
          <Text>Enter a Number</Text>

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
            <BTN style={styles.confirm} onBtnPress={onConfirm}>
              CONFIRM
            </BTN>
          </View>
        </Card>
        {selectedNumber}
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
