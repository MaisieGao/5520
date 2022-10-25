import { Alert,Pressable,StyleSheet,View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import helperForColor from '../../helperForColor';
import { useNavigation } from '@react-navigation/native';
import { deleteFromDB} from '../../firebase/firestore';
import { deleteFromDBForImportant,writeToDBForImportant} from '../../firebase/firestoreForImportant';
export default function EditExpense({route}) {
  const navigation = useNavigation();
  // //add data into ImportantExpenses collection if pressed mark as important button
  const addNew = () =>{
    {route.params.From === 2?
    //give id as the id each expense button generated
    writeToDBForImportant(
      {amount:route.params.amount,
      description:route.params.description }):
      deleteFromDBForImportant(route.params.key)}
      navigation.goBack()
 }

  //distinguish which page is the expense button clicked from
  //if from is 1, then it is from the ImportantExpenses page
  //if from is 2, then it is from the AllExpenses pages
  //it delete data from different databases
  const onDelete = ()=>{
    {route.params.From === 1?
        deleteFromDBForImportant(route.params.key):
        deleteFromDB(route.params.key)}
        navigation.goBack()
  }
  const from = route.params.From
  //delete the data from database if delete button is pressed
  
  //we get the id from the expense button that was clicked on
  

      const markAsImportant = () =>{
        Alert.alert(
            "Important",
            "Are you sure you want to mark this as important?",
            [
              {
                text: "No",
                onPress: () => navigation.navigate('edit'),
                style: "cancel"
              },
              { text: "Yes", onPress: addNew}
            ]
          );
      }

      const markAsDelete = () =>{
        Alert.alert(
            "Delete",
            "Are you sure you want to delete this?",
            [
              {
                text: "No",
                onPress: () => navigation.navigate('edit'),
                style: "cancel"
              },
              { text: "Yes", onPress: onDelete}
            ]
          );
      }
  return (
    <View style={styles.container}>
    <View style={styles.buttonBox}>
    
    <Pressable
        style={styles.button}
        onPress={markAsImportant}>
        <Text
        style={styles.appButton} >
        {route.params.From === 2?
        'Mark as important':
        'Mark as unimportant'}
        
        </Text>
    </Pressable>
    
    <Pressable
        style={styles.button}
        onPress={markAsDelete}>
        <Text
        style={styles.appButton} >
        Delete
        
        </Text>
    </Pressable>
    
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: helperForColor.lightScreen,
      alignItems: 'center',
      
      //set everything to be horizontal
    //   flexDirection: "row"
    },
    buttonBox:{
        marginTop: 30
    },
    button:{
        width: 165,
        height: 37,
        backgroundColor: helperForColor.darkScreen,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 4,
        margin: 9,
        borderRadius: 6,
        elevation: 3,
    },
    appButton:{
        fontSize: 16,
        letterSpacing: 0.25,
        color: 'white',
    },
});