import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './components/StartGameScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
export default function App() { 
  const [userNumber, setUserNumber] = useState('');
  // const [dataLoaded, setDataLoaded] = useState(false);
  const [gameFinish, setGameFinish] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [restart, setRestart] = useState(false);
  const [win, setWin] = useState(false);

   const restartGame = () => {
    setUserNumber(null);
    setRestart(true)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }
  const gameOverHandler = () =>{
    setGameOver(true); 
  }
  const gameWin = () =>{
    setWin(true);
    setGameOver(true);
  }
  const gameFinishHandle = () =>{
    setGameFinish(true); 
    setUserNumber(null)
  }
  
  let content = <StartGameScreen onStartGame={startGameHandler} />

    
    if (userNumber && !gameOver) { 
      content = <GameScreen pickedNumber={userNumber} gameIsOver={gameOverHandler} gameHadWin={gameWin} onRestart={restartGame}/>;
    } 
    if (gameOver && !restart) {
      content = <GameOverScreen pickedNumber={userNumber} onRestart={restartGame} gamewin={win} gameHasFinish={gameFinishHandle}/>;
    } 
    if (restart){
      content = <StartGameScreen onStartGame={startGameHandler} />;
    } 
  
  return (
    <View style={styles.screen}>
      <LinearGradient colors={['#F1BCD3', '#F56EA7', '#F10E6E']} style={styles.linearGradient}>
        {content}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});