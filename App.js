import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
// if you want to use this function, you have to export it
export default function App() {
  const name = "my app"
  const [text, setText] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const onTextAdd = (nextText)=>{
    setModalVisible(false)
  }
  const makeModalVisible = () => {setModalVisible(true)}
  const makeModalInvisible = () => {setModalVisible(false)}

  return (
    <SafeAreaView style={styles.safeContainer}>
    
      <View style={styles.head}>
      <Header appName={name}/>
      <Button title="add a goal" onPress={makeModalVisible}/>
      <Input  modal={modalVisible} onAdd={onTextAdd} onCancel={makeModalInvisible}/>
      <StatusBar style="auto" />
      </View>
      <View style={styles.bottom}>
        <View style={styles.textBox}>
          <Text style={styles.text}>You typed ...</Text>
        </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    // flex take all the space you have 
    // vertically
    justifyContent: 'center',
    // flexDirection: "row"
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  head:{
    flex:1,
    // horizontally
    alignItems: 'center',
  },
  bottom:{
    flex:4,
    backgroundColor: 'pink',
    alignItems: 'center',
    
  },
  textBox:{
    borderRadius: 5,
    backgroundColor: "#aaa",
  },
 
});
