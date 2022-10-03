import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ChooseNumberPage from "./pages/ChooseNumberPage";
import CompareNumberPage from "./pages/CompareNumberPage";
import GameOverPage from "./pages/GameOverPage";
export default function App() {
  const generateRandomNumber = (minimum, maximum) => {
    min = Math.ceil(minimum);
    max = Math.floor(maximum);
    const number =
      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return number;
  };
  const randomNumber = generateRandomNumber(1020, 1029);
  const [enteredNumber, setEnteredNumber] = useState("");
  const [gameFinish, setGameFinish] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  // when guess number is changed and the game restart
  const [restart, setRestart] = useState(false);
  // when guessNumber is not changed and reguess again
  const [reGuess, setReGuess] = useState(false);
  const [win, setWin] = useState(false);
  const [guessNumber, setGuessNumber] = useState(randomNumber);
  const [modalVisible, setModalVisible] = useState(false);
  const makeModalVisible = () => {
    setModalVisible(true);
  };
  const makeModalInvisible = () => {
    setModalVisible(false);
  };
  const restartGame = () => {
    setRestart(true);
    setGameOver(false);
    setWin(false);
    setGuessNumber(generateRandomNumber(1020, 1029));
  };

  const startGameFunction = (input) => {
    setEnteredNumber(input);
    setRestart(false);
    setReGuess(false);
  };
  const gameOverFunction = () => {
    setGameOver(true);
    setModalVisible(false);
  };
  const gameWinFunction = () => {
    setWin(true);
    setGameOver(true);
    setModalVisible(false);
  };
  const gameFinishFunction = () => {
    setGameFinish(true);
    setEnteredNumber(null);
  };

  const reGuessNumberFunction = () => {
    setReGuess(true);
    setGameOver(false);
    setWin(false);
    setModalVisible(false);
  };

  let screen = (
    <ChooseNumberPage 
      startGame={startGameFunction} 
      modal={makeModalVisible} />
  );
  if (gameOver && !restart) {
    screen = (
      <GameOverPage
        pickedNumber={enteredNumber}
        restart={restartGame}
        win={win}
        gameHasFinish={gameFinishFunction}
      />
    );
  }
  if (restart || reGuess) {
    screen = (
      <ChooseNumberPage
        startGame={startGameFunction}
        modal={makeModalVisible}
      />
    );
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F1BCD3", "#F56EA7", "#F10E6E"]}
        style={styles.linearGradient}
      >
        {modalVisible ? (
          <CompareNumberPage
            modal={modalVisible}
            guessNumber={guessNumber}
            pickedNumber={enteredNumber}
            gameIsOver={gameOverFunction}
            gameHadWin={gameWinFunction}
            onRestart={reGuessNumberFunction}
            onRestart={reGuessNumberFunction}
          />
        ) : (
          screen
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
