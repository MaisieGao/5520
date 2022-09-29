import React from "react";
import { View, StyleSheet } from "react-native";

const ButtonBox = props => {
  return (
    <View style={{ ...styles.button, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
  }
});

export default ButtonBox;