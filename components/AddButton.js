import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import helperForColor from "../helperForColor";

export default function AddButton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={helperForColor.pressButton}
      style={(obj) => {
        return obj.pressed && styles.pressedItem;
      }}
    >
      <View>
        <Ionicons name="add" size={28} color="black" style={styles.button} />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    marginRight: 5,
  },
  pressedItem: {
    color: helperForColor.pressButton,
    opacity: 0.5,
  },
});
