import {Pressable, View, Alert, TextInput, StyleSheet, Text} from 'react-native'
import React,{useEffect, useState} from 'react' 
import Color from '../../components/Color';
import db from '../../Firebase.js'; 
import { collection, doc, onSnapshot, addDoc } from 'firebase/firestore';
export default function InputExpense({ navigation}){
    const [number, setNumber] = useState(0)
    const [description, setDescription] = useState("")
    const [collection, setCollection] = useState('expenses');
    useEffect(()=>{
        if (navigation.state.params === 'important'){
          setCollection('ImportantExpenses')
        }else{
          setCollection('expenses')
        }
      },[navigation.state.params.From])
    //add number and description into a collection called expense 
    const addNew = async() =>{
        const collectionRef = collection(db, {collection});
        const payload = {
            name:{number},
            value:{description}    
    }
await addDoc(collectionRef,payload)}
    //make validation to check a valid value is entered
    const InputNumberFunction = async () => {
        if (isNaN(number) || number <= 0 ) {
          Alert.alert(
            "Invalid input!",
            "Please check your input value",
            [{ text: "Ok", onPress: setNumber(0) }]
          );
          return;
        }
        //if it is valid, add data to the collection
        else{
            ()=>{addNew}
           }}
    return(
       
        <View style={styles.container}>
            <View style={styles.wordBox}>
            <Text style={styles.bigWord}>Your Expense</Text>
            </View>
            <View style={styles.littleWord}>
            <Text style={styles.text}>Amount</Text>
            </View>
                <TextInput
                style={styles.input}
                onChangeText={(newNumber)=>{setNumber(newNumber)}}
                value={number}  
                />
            <View style={styles.smallWord}>
            <Text style={styles.text}>Description</Text>
            </View>
                <TextInput
                style={styles.textBox}
                onChangeText={(updateText)=>{setDescription(updateText)}}
                value={description}
                multiline={true}
                />
                <View style={styles.buttonBox}>
                <View >
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.goBack()}>
                    <Text
                    style={styles.appButton} >
                    Cancel
                    </Text>
                </Pressable>
                </View>
                <View>
                <Pressable
                    style={styles.button}
                    onPress={InputNumberFunction}>
                    <Text
                    style={styles.appButton} >
                    Submit
                    </Text>
                </Pressable>
                </View>  
                </View>
            
            </View>
            
       
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.lightScreen,
      alignItems: 'center',
      justifyContent: 'center',
      //set everything to be horizontal
    //   flexDirection: "row"
    },
    bigWord:{
        fontSize: 25,
        color:Color.wordColor,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: -50
    },
    littleWord:{
        marginLeft: -250
    },
    smallWord:{
        marginLeft: -230
    },
    text:{
        marginTop: 15,
        textAlign: 'left',
        color:Color.darkScreen,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor:Color.plainScreen,
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    textBox:{
        backgroundColor:Color.plainScreen,
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        height:150,
        padding: 10,
    },
    button:{
        width: 110,
        height: 37,
        backgroundColor: Color.darkScreen,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 4,
        borderRadius: 6,
        elevation: 3,
    },
    appButton:{
        fontSize: 16,
        letterSpacing: 0.25,
        color: 'white',
    },
    buttonBox:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 75,
        marginTop:10
    },
 
});