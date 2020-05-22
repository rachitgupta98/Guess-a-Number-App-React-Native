import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import BTN from "../components/customButton";
import Card from "../components/customCard";
import Input from "../components/customInput";
import NumberC from "../components/customNumber";
//let count = 0;
let msg;
const WelcomeScreen = (props) => {
  let computerGuess = props.value;
  const [userInput, setUserInput] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [finalValue, setFinalValue] = useState();
  const [chance, setChances] = useState(6);

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
    if (computerGuess === finalValue && props.count <= 6) {
      msg = "";
      props.endGame("Hurray! You won 👍", true);
    } else if (props.count === 6 && computerGuess != finalValue) {
      msg = "";
      props.endGame("Oops , You Lost 👎", false);
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
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.welcomeScreen}>
            <Card style={styles.card} elevation={20}>
              <Text style={{ fontSize: 15 }}>Enter a Number</Text>

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
            <Text style={{ color: "#302b63" }}>You have {chance} chance</Text>
            {selectedNumber}
            <Text style={styles.msg}>{msg}</Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  buttonView: {
    flexDirection: "row",
    //width: "70%",
    // width:
    //   Dimensions.get("window").width > 500
    //     ? Dimensions.get("window").width / 3
    //     : Dimensions.get("window").width / 2.1,
  },
  reset: {
    color: "red",
    fontWeight: "600",
    paddingRight: 30,
  },
  confirm: {
    color: "green",
    fontWeight: "600",
    paddingLeft: 30,
  },

  card: {
    width: "80%",
    //maxWidth: "%",
    minWidth: 300,
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
    color: "white",
    backgroundColor: "lightblue",
    padding: 6,
    borderRadius: 40,
  },
  msg: {
    marginVertical: 10,
    fontSize: 15,
    color: "#302b63",
  },
});

export default WelcomeScreen;
