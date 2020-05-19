import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import WelcomeScreen from "./screens/welcomeScreen";
import StartGameScreen from "./screens/startGameScreen";
import NumberGen from "./components/randomNumberGenerator";
import EndGame from "./screens/endGame";
//import { useState } from "react";
let computerGuess;
export default function App() {
  const [nav, setNav] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [result, setResult] = useState("");
  const [count, setCount] = useState(1);
  const [win, setWin] = useState(true);
  const handleNav = () => {
    computerGuess = NumberGen();
    setNav(true);
  };
  const handleEndGame = (text, logic) => {
    setEndGame(true);
    setResult(text);
    setWin(logic);
  };

  const onhandleCount = () => {
    setCount(count + 1);
  };
  const onRestart = () => {
    setEndGame(false);
    computerGuess = NumberGen();
    setCount(1);
  };
  let screen = <StartGameScreen onPress={handleNav} />;
  if (nav && !endGame) {
    screen = (
      <WelcomeScreen
        value={computerGuess}
        endGame={handleEndGame}
        count={count}
        changeCount={onhandleCount}
      />
    );
  } else if (nav && endGame) {
    screen = (
      <EndGame
        title={result}
        value={computerGuess}
        restart={onRestart}
        win={win}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number"></Header>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
