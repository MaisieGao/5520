import { Alert,Pressable,StyleSheet,View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../../components/Color';
import { useNavigation } from '@react-navigation/native';
import db from '../../Firebase.js'; 
import { deleteDoc, setDoc } from 'firebase/firestore';

export default function EditExpense() {
  const navigation = useNavigation();
  const [collection, setCollection] = useState('expenses');
  //add data into ImportantExpenses collection if pressed mark as important button
  const addNew = async() =>{
    //give id as the id each expense button generated
    const id = navigation.state.params.id
    const docRef = doc(db, 'ImportantExpenses',id);
    const payload = {
        name:navigation.state.params.item.name,
        value:navigation.state.params.item.value,
  }
  await setDoc(docRef,payload);}

  //distinguish which page is the expense button clicked from
  //if from is 1, then it is from the ImportantExpenses page
  //if from is 2, then it is from the AllExpenses pages
  //it delete data from different databases
  useEffect(()=>{
    if (navigation.state.params.From === 1){
      setCollection('ImportantExpenses')
    }else{
      setCollection('expenses')
    }
  },[navigation.state.params.From])
   
  //delete the data from database if delete button is pressed
  //we get the id from the expense button that was clicked on
    const onDelete = async (id) =>{
       const docRef = doc(db,{collection},id);
       await deleteDoc(docRef)
      }

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
  return (
    <View style={styles.container}>
    <View style={styles.buttonBox}>
    
    <Pressable
        style={styles.button}
        onPress={markAsImportant}>
        <Text
        style={styles.appButton} >
        Mark as important
        </Text>
    </Pressable>
    
    <Pressable
        style={styles.button}
        onPress={onDelete}>
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
      backgroundColor: Color.lightScreen,
      alignItems: 'center',
      
      //set everything to be horizontal
    //   flexDirection: "row"
    },
    buttonBox:{
        marginTop: 30
    },
    button:{
        width: 150,
        height: 37,
        backgroundColor: Color.darkScreen,
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