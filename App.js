import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainWithNav from './pages/MainWithNav';
import InputExpense from './pages/screens/InputExpense';
import EditExpense from './pages/screens/EditExpense';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }}}>
      <Stack.Screen
          name="nav"
          component={MainWithNav}
        />
        <Stack.Screen name="input" component={InputExpense} options={{title: 'Input Expense'}}/>
        <Stack.Screen name="edit" component={EditExpense} options={{title: 'Edit Expense'}}/>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;