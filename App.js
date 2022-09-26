import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ChooseNumberPage from './components/ChooseNumberPage';
import CompareNumberPage from './components/CompareNumberPage';
import GameOverPage from './components/GameOverPage';
export default function App() { 
  const generateRandomNumber = (minimum, maximum) => {
    min = Math.ceil(minimum);
    max = Math.floor(maximum);
    const number = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return number
  }
  const randomNumber = generateRandomNumber(1020,1029);
  const [enteredNumber, setEnteredNumber] = useState('');
  // const [dataLoaded, setDataLoaded] = useState(false);
  const [gameFinish, setGameFinish] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [restart, setRestart] = useState(false);
  const [reGuess, setReGuess] = useState(false);
  const [win, setWin] = useState(false);
  const [guessNumber, setGuessNumber] = useState(randomNumber);
   const restartGame = () => {
    // setUserNumber("");
    setRestart(true)
    setGameOver(false)
    setWin(false)
    setGuessNumber(generateRandomNumber(1020,1029))
  }
  
  const startGameFunction = (input) => {
    setEnteredNumber(input);
    setRestart(false)
    setReGuess(false)
  }
  const gameOverFunction = () =>{
    setGameOver(true); 
  }
  const gameWinFunction = () =>{
    setWin(true);
    setGameOver(true);
  }
  const gameFinishFunction = () =>{
    setGameFinish(true); 
    setEnteredNumber(null)
  }
  
  const reGuessNumberFunction = () => {
    // setUserNumber("");
    setReGuess(true)
    setGameOver(false)
    setWin(false)
  }
  let screen = <ChooseNumberPage startGame={startGameFunction} />   
  if (enteredNumber && !gameOver) {
    screen = <CompareNumberPage guessNumber={guessNumber} pickedNumber={enteredNumber} gameIsOver={gameOverFunction} gameHadWin={gameWinFunction} onRestart={reGuessNumberFunction}/>;
  } 
  if (gameOver && !restart) {
    screen = <GameOverPage pickedNumber={enteredNumber} restart={restartGame} win={win} gameHasFinish={gameFinishFunction}/>;
  } 
  if (restart || reGuess){
    screen = <ChooseNumberPage startGame={startGameFunction} />;
  }
  
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F1BCD3', '#F56EA7', '#F10E6E']} style={styles.linearGradient}>
        {screen}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});


