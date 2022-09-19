import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// if you want to use this function, you have to export it
export default function App() {
  const myapp = "string"
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on {myapp}!</Text>
      <StatusBar style="auto" />
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
});
