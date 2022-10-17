import {View, TextInput, Button, StyleSheet, Text} from 'react-native'
import React,{useState} from 'react' 

export default function Input({onAdd, navigation}){
    const [text, setText] = useState("")
    const [description, setDescription] = useState("")
    const InputNumberFunction = () => {
        // isNaN -> not a number
        onAdd(text)
        setText('')
        if (isNaN(inputNumber) || inputNumber <= 0 ) {
          Alert.alert(
            "Invalid number!",
            "Can only enter number not alphebets"
            [{ text: "Okay", style: "destructive", onPress: setText('') }]
          );
          return;
        }};
    return(
       
        <View style={styles.container}>
            <View style={styles.wordBox}>
            <Text>Your Expense</Text>
            </View>
            <Text style={styles.text}>Amount</Text>
                <TextInput
                style={styles.input}
                onChangeText={(newText)=>{setText(newText)}}
                value={text}
                
                />
            <Text style={styles.text}>Description</Text>
                <TextInput
                style={styles.textBox}
                onChangeText={(updateText)=>{setDescription(updateText)}}
                value={description}
                />
                
                <View style={styles.button}>
                <Button
                    title='Cancel'
                    onPress={() => navigation.goBack()}>
                    
                </Button>
                <Button
                    title='Submit'
                    onPress={
                        
                        InputNumberFunction
                    }
                    disabled={text.length? false: true}
                ></Button>
                    </View>
                    <View style={styles.button}>
                
                    </View>
                    
                    </View>
            
       
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      //set everything to be horizontal
    //   flexDirection: "row"
    },
    
    text:{
        marginTop: 10,
        textAlign: 'left'

    },
    input: {
        borderColor: "gray",
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    textBox:{
        borderColor: "gray",
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        height:150,
        padding: 10,
    },
    button:{
        margin:5,
        
    },
    tinyLogo:{
        width: 50,
        height: 50,
    }
});