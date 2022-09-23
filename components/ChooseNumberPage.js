import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  Alert,
  StyleSheet,
  Dimensions,
} from "react-native";

const ChooseNumberPage = (props) => {
  const [input, setInput] = useState();

  const handleChangeFunction = (input) => {
    setInput(input);
  };
  const resetvalueFunction = () => {
    setInput("");
  };
  const InputNumberFunction = () => {
    // isNaN -> not a number
    if (isNaN(input) || input < 1020 || input > 1029) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1020 and 1029",
        [{ text: "Okay", style: "destructive", onPress: resetvalueFunction }]
      );
      return;
    }
    props.startGame(input);
    // hide keyboard
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess My Number</Text>
      <View style={styles.card}>
        <Text style={styles.topic}>Enter a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          keyboardType="phone-pad"
          onChangeText={handleChangeFunction}
          value={input}
        />
        <View style={styles.buttonBox}>
          <View style={styles.button}>
            <Button
              color="#8a2be2"
              title="Reset"
              onPress={resetvalueFunction}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="#ff1493"
              title="Confirm"
              onPress={InputNumberFunction}
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
    marginTop: 65,
    marginVertical: 10,
    height: 55,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#800080",
    borderColor: "#800080",
  },
  topic: {
    marginTop: 20,
    fontSize: 20,
    color: "yellow",
  },
  button: {
    width: Dimensions.get("window").width / 4,
    maxWidth: 80,
  },
  input: {
    width: 50,
    textAlign: "center",
    borderBottomColor: "yellow", // Add this to specify bottom border color
    borderBottomWidth: 1,
    marginTop: 20,
    color: "yellow",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  card: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    height: 200,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "black",
    borderRadius: 19,
    shadowColor: "blue",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.26,
    elevation: 20,
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
