import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import Color from "./../components/Color";
import Title from "./../components/Title";
import Card from "./../components/Card";
import Topic from "./../components/Topic";
import Container from "./../components/Container";
const GameOverPage = (props) => {
  let win = props.win;
  return (
    <Container style={styles.container}>
      <Title style={styles.title}>Game is Over</Title>
      <Card style={styles.card}>
        <Topic style={styles.topic}>Here is your picture</Topic>
        {props.win === true ? (
          <Image
            source={{
              uri:
                "https://picsum.photos/id/" + props.pickedNumber + "/100/100",
            }}
            style={styles.image}
          />
        ) : (
          <Image
            source={require("../components/sadEmoji.png")}
            style={styles.image}
          />
        )}
        <Button
          color={Color.buttonPink}
          title="Start Again"
          onPress={props.restart}
        />
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 22,
    marginBottom: 17,
  },
  title: {
    marginTop: 1,
  },
  card: {
    height: 300,
  },
});

export default GameOverPage;
