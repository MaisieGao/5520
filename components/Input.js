
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Color from './Color';

const Input = props => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}}/>
  )
};

const styles = StyleSheet.create({
  input: {
    width: 50,
    textAlign: "center",
    borderBottomColor: Color.topic, // Add this to specify bottom border color
    borderBottomWidth: 1,
    marginTop: 25,
    color: Color.topic,
    fontSize:20
  }
});

export default Input;