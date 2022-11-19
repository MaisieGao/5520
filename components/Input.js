import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'
import React,{useState} from 'react' 
import ImageManager from './ImageManager'

export default function Input({onAdd, modal, onCancel}){
    const [text, setText] = useState("")
    const [uri, setUri] = useState("");
    const imageHandler = (uri) =>{
        console.log('uri',uri)
        setUri(uri);
    }
    return(
        <Modal visible={modal}>
            <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png',
                }}
            />
            <ImageManager imageManager={imageHandler}/>
                <TextInput
                style={styles.input}
                onChangeText={(newText)=>{setText(newText)}}
                value={text}
                placeholder="enter some words"
                />
                <View style={styles.buttonBox}>
                <View style={styles.button}>
                <Button
                    title='Confirm'
                    onPress={()=>{
                        onAdd({text,uri})
                        setText('')
                        
                    }}
                    
                    ></Button>
                    </View>
                    <View style={styles.button}>
                <Button
                    title='Cancel'
                    onPress={onCancel}>
                    
                    </Button>
                    </View>
                    </View>
            </View>
        </Modal>
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
    input: {
        color: "#ff00ff",
        borderBottomWidth: 2,
        borderBottomColor: "purple",
    },
    buttonBox:{
        flexDirection:'row'
    },
    button:{
        margin:5,
        
    },
    tinyLogo:{
        width: 50,
        height: 50,
    }
});