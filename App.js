import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainWithNav from './pages/MainWithNav';
import InputExpense from './pages/screens/InputExpense';
import EditExpense from './pages/screens/EditExpense';
import Color from './components/Color';
import 'expo-dev-menu';


function App() {
  const Stack = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerStyle: {
        backgroundColor: Color.darkScreen,
      },
      headerTintColor: Color.wordColor,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20
      },
      }}>
      <Stack.Screen
          name="back"
          component={MainWithNav}
        />
        <Stack.Screen name="input" component={InputExpense} options={{title: 'Add Expense'}}/>
        <Stack.Screen name="edit" component={EditExpense} options={{title: 'Edit Expense'}}/>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;