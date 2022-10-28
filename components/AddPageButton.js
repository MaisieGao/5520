import { View, StyleSheet, Pressable, Text } from "react-native";
import helperForColor from "../helperForColor";
import React, { useState } from "react";
export default function AddPageButton({ onPress, button }) {
  const [text, setText] = useState("");
 

  return (
    <Pressable
      onPress={onPress}
      android_ripple={helperForColor.pressButton}
      style={(obj) => {
        return obj.pressed && styles.pressedItem;
      }}
    >
      <View style={styles.button}>
        <Text style={styles.appButton}>{button}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 110,
    height: 37,
    backgroundColor: helperForColor.darkScreen,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 4,
    borderRadius: 6,
    elevation: 3,
  },
  appButton: {
    fontSize: 16,
    letterSpacing: 0.25,
    color: "white",
  },
  pressedItem: {
    color: helperForColor.pressButton,
    opacity: 0.5,
  },
});
