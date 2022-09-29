import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet,Button,Modal } from "react-native";
import Color from "./../components/Color";
import Card from "./../components/Card";
import Topic from "./../components/Topic";
import ButtonBox from "../components/ButtonBox";
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
    <Modal visible={props.modal} style={styles.container} transparent={true}>
    <View style={styles.container}>
      
      {props.pickedNumber != props.guessNumber ? (
        <>
          <Card style={styles.card}>
          {/* <Modal visible={props.modal}> */}
            <View>
              <Topic style={styles.text1}>
                You have chosen {props.pickedNumber}
                {"\n"}That's not my number!
              </Topic>
              <Topic style={styles.text2}>Guess {direction}!</Topic>
            </View>
            <View style={styles.button}>
              <Button
                color={Color.buttonPurple}
                title="I am done!"
                onPress={props.gameIsOver}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Color.buttonPink}
                title="Let Me Guess Again"
                onPress={props.onRestart}
              />
            </View>
            {/* </Modal> */}
          </Card>
          
        </>
      ) : (
        <Card style={styles.card2}>
          <View>
            <Topic style={styles.text1}>Congrats! You Won!</Topic>
          </View>
          <ButtonBox style={styles.button}/>
            <Button
              color={Color.buttonPink}
              title="Thank you!"
              onPress={props.gameHadWin}
            />
          
        </Card>
      )}
    </View>
    </Modal>
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
    height: 270,
    
  },
  card2: {
    height: 130,
  },
  text1: {
    justifyContent: "center",
    textAlign: "center",
  },
  text2: {
    textAlign: "center",
    marginTop: 0,
  },
});

export default CompareNumberPage;
