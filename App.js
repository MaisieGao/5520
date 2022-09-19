import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
// if you want to use this function, you have to export it
export default function App() {
  const name = "my app"
  const [text, setText] = useState("")

  return (
    <View style={styles.container}>
      <Header appName={name}/>
      <StatusBar style="auto" />
      {/* another text area that shows text on the view */}
      <Text>{text}</Text>
      <TextInput
        style={styles.input}
      //if you don't type anything, it shows 
        placeholder="type whatever"
        // when text change, setText is called and set t to test
        onChangeText={t => setText(t)}
        // the input that shows in the textbar
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});
