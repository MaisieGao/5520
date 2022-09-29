
import React from "react";
import { Text, StyleSheet } from "react-native";
import Color from './Color';
const Topic = props => {
    return (
      <Text style={{ ...styles.topic, ...props.style }}>{props.children}</Text>
    );
  };
  
  const styles = StyleSheet.create({
      topic: {
        marginTop: 20,
        fontSize: 23,
        color: Color.topic,
    }
  });
  
  export default Topic;