import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";


// const generateRandomBetween = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   const rndNum = Math.floor(Math.random() * (max - min)) + min;
//   return rndNum;
// };

const GameScreen = props => {
    const [direction, setDirection] = useState("")
    console.log("generated number",props.computerNumber)
    let guess = props.pickedNumber;
    console.log('guessed number',guess)
    const getDirection = useCallback(() =>{
        if (props.computerNumber < guess) {
            setDirection("lower")
            console.log('guessed number2',guess)
            console.log("generated number2",props.computerNumber)
        } else if (props.computerNumber > guess){
            setDirection("higher")
        } },[]);
        useEffect(() => {
          getDirection();
        }, []);

  return (
    <View style={styles.container}>
        {props.pickedNumber != props.computerNumber ? (
        <>
        <View style={styles.card}>
          <View>
            <Text style={styles.text1}>You have chosen {props.pickedNumber}{"\n"}That's not my number!{"\n"}Guess {direction}!</Text>
          </View>
          <View style={styles.button}>
          <Button 
          color="#8a2be2"
          title="I am done!"
          onPress={props.gameIsOver}
        />
          </View>
          <View style={styles.button}>
          <Button 
          
          color="#ff1493"
          title="Let Me Guess Again"
          onPress={props.onRestart}
        />
          </View>
        </View>
        </>
      ) : 
      <View style={styles.card2}>
        <View>
          <Text style={styles.text1}>Congrats! You Won!</Text>
        </View>
        <View style={styles.button}>
          <Button 
          color="#ff1493"
          title="Thank you!"
          onPress={props.gameHadWin}
        />
          
        </View>
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    display: 'flex'
  },
  button: {
    marginTop: 25
},

  card: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    height: 300,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "black",
    borderRadius: 20
  },
  card2: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    height: 150,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "black",
    borderRadius: 19
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#171717',
  },
  text1: {
    color: "yellow",
    fontSize: 22,
    justifyContent: "center",
    marginTop: 20,
  },
  text2: {
    color: "#800080",
    fontSize: 22
  },
  text3: {
    color: "pink",
    fontSize: 22
  },

});

export default GameScreen;