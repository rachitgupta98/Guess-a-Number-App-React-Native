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
import NumberC from "../components/customNumber";
//let count = 0;
let msg;
const WelcomeScreen = (props) => {
  let computerGuess = props.value;
  //console.log(computerGuess);
  //console.log(props.count);
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
    msg = "";
  };

  const onConfirm = () => {
    let chosenNum = parseInt(userInput);
    if (isNaN(chosenNum) || chosenNum <= 0) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99.",
        [{ text: "OK", style: "destructive", onPress: onReset }]
      );
    } else {
      setConfirm(true);

      setFinalValue(chosenNum);
    }
    Keyboard.dismiss();
  };
  const onCheck = () => {
    //console.log(finalValue);

    console.log(props.count + " " + computerGuess + " " + finalValue);
    //setChances(chance - 1);
    if (computerGuess === finalValue && props.count <= 3) {
      msg = "";
      props.endGame("Hurray ! You won", true);
    } else if (props.count === 3 && computerGuess != finalValue) {
      msg = "";
      props.endGame("Oops , You Lost", false);
    } else {
      if (computerGuess > finalValue) {
        msg = `Selected number is Lesser`;
      } else if (computerGuess < finalValue) {
        msg = `Selected number is Greater`;
      }
      props.changeCount();
    }
    setChances(chance - 1);
  };
  let selectedNumber;
  if (confirm) {
    selectedNumber = (
      <Card style={styles.numberContainer} elevation={8}>
        <Text>You Selected</Text>
        <NumberC>{finalValue}</NumberC>
        <BTN style={styles.check} onBtnPress={onCheck}>
          CHECK
        </BTN>
      </Card>
    );
  }
  //  console.log(allowedChance);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.welcomeScreen}>
        <Card style={styles.card} elevation={20}>
          <Text>Enter a Number</Text>
          <Text>{chance}</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            value={userInput}
            onChangeText={handleUserInput}
            editable={!confirm}
            //onFocus={onReset}
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
        <Text>{msg}</Text>
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
  numberContainer: {
    alignItems: "center",
    maxWidth: "80%",
  },
  check: {
    color: "#780206",
  },
});

export default WelcomeScreen;
