import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  Alert,
  StyleSheet,
  Dimensions
} from "react-native";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = input => {
    setEnteredValue(input);
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    // isNaN -> not a number
    if (isNaN(enteredValue) || enteredValue < 1020 || enteredValue > 1029) {
      Alert.alert("Invalid number!", "Number has to be a number between 1020 and 1029", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }
    setConfirmed(true);
    // hide keyboard
    Keyboard.dismiss()
  }
  if(confirmed){
    props.onStartGame(enteredValue)
  }
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Guess My Number</Text>
      <View style={[styles.card, styles.shadowProp, styles.elevation]}>
      <Text style={styles.topic}>Enter a Number</Text>
      <TextInput
        style={styles.input}
        blurOnSubmit
        autoCapitalize="none"
        keyboardType = 'phone-pad'
        onChangeText={handleChange}
        value={enteredValue}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            color="#8a2be2"
            title="Reset"
            onPress={resetInputHandler}
          />
        </View>
        <View style={styles.button}>
          <Button
            color="#ff1493"
            title="Confirm"
            onPress={confirmInputHandler}
          />
        </View>
      </View>
      </View>
    
  </View>

);
};

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        
        },
        title: {
            fontSize: 23,
            marginTop: 80,
            marginVertical: 10,
            height: 55,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            color: "#800080",
            borderColor: "#800080",
        },
        topic:{
            marginTop: 20,
            fontSize: 20,
            color:"yellow"
            },
        button: {
            width: Dimensions.get('window').width / 4,
            maxWidth: 80,
            
        },
        input: {
            width: 50,
            textAlign: "center",
            borderBottomColor: 'yellow', // Add this to specify bottom border color
            borderBottomWidth: 1,
            marginTop: 20,
            color: "yellow"
        },
        summaryContainer: {
          marginTop: 20,
          alignItems: "center"
        },
        card: {
          width: "80%",
          maxWidth: "95%",
          minWidth: 300,
          height: 200,
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
        buttonContainer: {
          marginTop: 30,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 15
        }
    }
);

export default StartGameScreen;
