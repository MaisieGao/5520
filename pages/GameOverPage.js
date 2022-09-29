import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import Color from "./../components/Color";
import Title from "./../components/Title";
import Card from "./../components/Card";
import Topic from "./../components/Topic";
const GameOverPage = (props) => {
  let win = props.win;
  return (
    <View style={styles.container} >
      <Title style={styles.title}>Game is Over</Title>
      <Card style={styles.card}>
        <Topic style={styles.topic}>Here is your picture</Topic>
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
            source={require("../components/sadEmoji.png")}
            style={{ width: 200, height: 200, marginTop: 20, marginBottom: 20 }}
          />
        )}
        <Button
          color={Color.buttonPink}
          title="Start Again"
          onPress={props.restart}
        />
      </Card>
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
    marginTop: 1,
  },
  card: {
    height: 360,
  },

});

export default GameOverPage;
