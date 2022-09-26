import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
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
    <View style={styles.container}>
      <Header appName={name}/>
      <Button title="add a goal" onPress={makeModalVisible}/>
      <Input modal={modalVisible} onAdd={onTextAdd} onCancel={makeModalInvisible}/>
      <StatusBar style="auto" />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex take all the space you have 
    flex: 1,
    backgroundColor: '#fff',
    // horizontally
    alignItems: 'center',
    // vertically
    justifyContent: 'center',
    flexDirection: "row"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});
