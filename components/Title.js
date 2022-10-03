
import React from "react";
import { Text, StyleSheet } from "react-native";
import Color from './Color';
const Title = props => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        marginTop: 65,
        marginVertical: 10,
        height: 55,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: Color.buttonPurple,
        borderColor: Color.buttonPurple,
  }
});

export default Title;