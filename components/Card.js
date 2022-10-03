import React from "react";
import { View, StyleSheet } from "react-native";
import Color from "./Color";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "75%",
    maxWidth: "95%",
    minWidth: 290,
    height: 190,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: Color.cardBackgroundColor,
    borderRadius: 19,
    shadowColor: Color.cardShadow,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.26,
    elevation: 20,
  }
});

export default Card;