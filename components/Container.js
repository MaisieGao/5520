import React from "react";
import { View, StyleSheet } from "react-native";
import Color from "./Color";

const Container = props => {
  return (
    <View style={{ ...styles.container, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
  }
});

export default Container;