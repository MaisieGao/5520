import {Pressable, View, Alert, TextInput, StyleSheet, Text} from 'react-native'
import React,{useState} from 'react' 
import Color from '../../components/Color';

export default function InputExpense({onAdd, navigation}){
    const [number, setNumber] = useState(0)
    const [description, setDescription] = useState("")
    const InputNumberFunction = () => {
        // isNaN -> not a number
        // onAdd(text)
        // setText('')
        if (isNaN(number) || number <= 0 ) {
          Alert.alert(
            "Invalid input!",
            "Please check your input value",
            [{ text: "Ok", onPress: setNumber(0) }]
          );
          return;
        }};
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