import React, { useState } from "react";
import {
  View,
  Button,
  Keyboard,
  Alert,
  StyleSheet,
  Dimensions,
} from "react-native";
import Color from "./../components/Color";
import Card from "./../components/Card";
import Title from "./../components/Title";
import Input from "./../components/Input";
import Topic from "./../components/Topic";
import Container from "./../components/Container";
const ChooseNumberPage = (props) => {
  const [inputNumber, setInputNumber] = useState();
  const handleChangeFunction = (text) => {
    setInputNumber(text);
  };
  const resetvalueFunction = () => {
    setInputNumber("");
  };
  const InputNumberFunction = () => {
    // isNaN -> not a number
    if (isNaN(inputNumber) || inputNumber < 1020 || inputNumber > 1029) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1020 and 1029",
        [{ text: "Okay", style: "destructive", onPress: resetvalueFunction }]
      );
      return;
    }
    props.startGame(inputNumber);
    props.modal();
    // hide keyboard
    Keyboard.dismiss();
  };
  return (
    <Container style={styles.container}>
      <Title style={styles.title}>Guess My Number</Title>
      <Card style={styles.card}>
        <Topic style={styles.topic}>Enter a Number</Topic>
        <Input
          blurOnSubmit
          keyboardType="number-pad"
          onChangeText={handleChangeFunction}
          value={inputNumber}
          maxLength={4}
        />
        <View style={styles.buttonBox}>
          <View style={styles.button}>
            <Button
              color={Color.buttonPink}
              title="Reset"
              onPress={resetvalueFunction}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={Color.buttonPurple}
              title="Confirm"
              onPress={InputNumberFunction}
            />
          </View>
        </View>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    width: Dimensions.get("window").width / 4,
    maxWidth: 90,
  },

  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonBox: {
    marginTop: 30,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default ChooseNumberPage;
