import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";

import helperForColor from "../../helperForColor";
import ExpenseButton from "../../components/ExpenseButton";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase/firebase-setup.js";
export default function AllExpenses() {
  const [importants, setImportants] = useState([]);
  //only show important expenses-when important is set to true
  useEffect(() => {
    onSnapshot(collection(firestore, "Expenses"), (querySnapshot) => {
      if (querySnapshot.empty) {
        setImportants([]);
        return;
      }
      const filteredList = querySnapshot.docs.filter((snapDoc) => {
        let data = snapDoc.data();
        return data.important;
      });

      setImportants(
        filteredList.map((snapDoc) => {
          let data = snapDoc.data();
          data = { ...data, key: snapDoc.id };
          return data;
        })
      );
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.margin}></View>
      <View style={styles.scroll}>
        {importants ? (
          <FlatList
            data={importants}
            renderItem={({ item }) => {
              return (
                //passing assign is 1 to expense button to note the button is clicked from important page
                <ExpenseButton item={item} />
              );
            }}
            contentContainerStyle={styles.contentContainer}
          ></FlatList>
        ) : (
          <View></View>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: helperForColor.lightScreen,
  },
  margin: {
    flex: 1,
  },
  scroll: {
    flex: 20,
  },
});
