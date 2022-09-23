import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CompareNumberPage = (props) => {
  const [direction, setDirection] = useState("");
  let guess = props.pickedNumber;
  console.log("guessnumber", props.guessNumber);
  const getDirectionFunction = useCallback(() => {
    if (props.guessNumber < guess) {
      setDirection("lower");
    } else if (props.guessNumber > guess) {
      setDirection("higher");
    }
  }, []);
  useEffect(() => {
    getDirectionFunction();
  }, []);
  return (
    <View style={styles.container}>
      {props.pickedNumber != props.guessNumber ? (
        <>
          <View style={styles.card}>
            <View>
              <Text style={styles.text1}>
                You have chosen {props.pickedNumber}
                {"\n"}That's not my number!
              </Text>
              <Text style={styles.text2}>Guess {direction}!</Text>
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
      ) : (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  button: {
    marginTop: 25,
  },
  card: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    height: 290,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "black",
    borderRadius: 20,
    borderRadius: 19,
    shadowColor: "blue",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.26,
    elevation: 20,
  },
  card2: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    height: 150,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "black",
    borderRadius: 19,
    borderRadius: 19,
    shadowColor: "blue",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.26,
    elevation: 20,
  },
  text1: {
    color: "yellow",
    fontSize: 22,
    justifyContent: "center",
    marginTop: 20,
    textAlign: "center",
  },
  text2: {
    color: "yellow",
    fontSize: 22,
    textAlign: "center",
  },
});

export default CompareNumberPage;
