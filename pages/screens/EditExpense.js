import { Alert, Pressable, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import helperForColor from "../../helperForColor";
import { useNavigation } from "@react-navigation/native";
import {
  writeToDatabase,
  updateFromDB,
  deleteFromDB,
} from "../../firebase/firestore";
import MarkButton from "../../components/MarkButton";
import DeleteButton from "../../components/DeleteButton";
export default function EditExpense({ route }) {
  const navigation = useNavigation();

  const important = route.params.important;

  //add data into ImportantExpenses collection if pressed mark as important button
  const switchImportant = () => {
    //if important is true, means it is already important
    {
      important
        ? updateFromDB(route.params.key, { important: false })
        : //if important is false, means it should be added into important
          updateFromDB(route.params.key, { important: true });
    }
    navigation.goBack();
  };

  //distinguish which page is the expense button clicked from
  //it delete data from different databases
  const onDelete = () => {
    deleteFromDB(route.params.key);
    navigation.goBack();
  };

  const markAsImportant = () => {
    let string = "important";
    if (important) {
      string = "unimportant";
    }
    //Alerts shown to the user when deleting and editing expense items
    Alert.alert(
      "Important",
      "Are you sure you want to mark this as " + string,
      [
        {
          text: "No",
          style: "cancel",
        },
        { text: "Yes", onPress: switchImportant },
      ]
    );
  };

  const markAsDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this?", [
      {
        text: "No",
        style: "cancel",
      },
      { text: "Yes", onPress: onDelete },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonBox}>
        {/* Buttons are implemented using Pressable */}
        <MarkButton
          onPress={markAsImportant}
          important={important}

        />

        <DeleteButton
          onPress={markAsDelete}
          button={"delete"}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: helperForColor.lightScreen,
    alignItems: "center",

    //set everything to be horizontal
    //   flexDirection: "row"
  },
  buttonBox: {
    marginTop: 30,
  },
  button: {
    width: 200,
    height: 37,
    backgroundColor: helperForColor.darkScreen,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 4,
    margin: 9,
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
