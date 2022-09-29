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

const ChooseNumberPage = (props) => {
  const [inputNumber, setInputNumber] = useState();

  const handleChangeFunction = (text) => {
    const filteredText = text.replace(/\D/gm, '');     
    setInputNumber(filteredText);
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
    <View style={styles.container}>
      <Title style={styles.title}>Guess My Number</Title>
      <Card style={styles.card}>
        <Topic style={styles.topic}>Enter a Number</Topic>
        <Input
          blurOnSubmit
          textContentType='telephoneNumber' 
          dataDetectorTypes='phoneNumber' 
          keyboardType='number-pad'
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
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
