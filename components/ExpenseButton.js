import { View, StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import helperForColor from "../helperForColor";

export default function ExpenseButton({ item }) {
  const navigation = useNavigation();
  //when press button, it should navigate to edit page
  const onItemPress = () => {
    //it should pass the params to edit page so edit page can use the info

    navigation.navigate("edit", {
      key: item.key,
      amount: item.amount,
      description: item.description,
      important: item.important,
    });
  };

  return (
    <Pressable
      onPress={onItemPress}
      android_ripple={helperForColor.pressButton}
      style={(obj) => {
        return obj.pressed && styles.pressedItem;
      }}
    >
      <View style={styles.box} key={item.key}>
        <View style={styles.largetextbox}>
          <Text style={styles.largetext}>{item.description}</Text>
        </View>
        <View style={styles.smalltextbox}>
          <Text style={styles.smalltext}>{item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    backgroundColor: helperForColor.darkScreen,
    color: "blue",
    marginVertical: 15,
    marginHorizontal: 30,
    height: 60,
    // make the button go horizontal
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
  },
  largetextbox: {
    width: "70%",
    justifyContent: "center",
    marginLeft: 17,
  },
  smalltextbox: {
    width: "25%",
    margin: 15,
    marginLeft: -15,
    backgroundColor: helperForColor.wordColor,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  largetext: {
    fontSize: 20,
    fontWeight: "bold",
    color: helperForColor.wordColor,
  },
  smalltext: {
    fontSize: 18,
    fontWeight: "bold",

    color: helperForColor.darkScreen,
  },
  pressedItem: {
    color: helperForColor.pressButton,
    opacity: 0.5,
  },
});
