import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
const GameOverPage = (props) => {
  let win = props.win;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game is Over</Text>
      <View style={styles.card}>
        <Text style={styles.topic}>Here is your picture</Text>
        {props.win === true ? (
          <Image
            source={{
              uri:
                "https://picsum.photos/id/" + props.pickedNumber + "/100/100",
            }}
            style={{ width: 200, height: 200, marginTop: 20, marginBottom: 25 }}
          />
        ) : (
          <Image
            source={require("./sadEmoji.png")}
            style={{ width: 200, height: 200, marginTop: 20, marginBottom: 20 }}
          />
        )}
        <Button
          style={styles.button}
          color="#ff1493"
          title="Start Again"
          onPress={props.restart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    alignItems: "center",
  },
  title: {
    fontSize: 23,
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
  card: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    height: 370,
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

  button: {
    backgroundColor: "black",
  },
});

export default GameOverPage;
