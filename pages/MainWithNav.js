import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Color from '../components/Color';
// Screens
import AllExpenses from './screens/AllExpenses';
import ImportantExpenses from './screens/ImportantExpenses';
import AddButton from '../components/AddButton';
import { useNavigation } from '@react-navigation/native';


function MainWithNav() {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator(); 
  const rightButton = () =>{
    return <AddButton onPress={() => {
      navigation.navigate('input');
    }} 
    />
  }
  return (
    <React.Fragment>
      <Tab.Navigator 
      
      screenOptions={{headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }}}
      >
        <Tab.Screen 
          name="All Expenses"
          component={AllExpenses}
          options={({ route,navigation }) => {
            return {
              title: 'All Expenses',
              headerRight: rightButton,
              tabBarIcon: ({focused}) => {
                return (
                  <FontAwesome 
                  name="dollar" 
                  size={24} 
                  color={focused ? Color.tabActive : Color.tabInactive} />
                )}
            }}
          }/>
        <Tab.Screen 
        name="Important Expenses"
        component={ImportantExpenses}
        options={({ route,navigation }) => {
          return {
            title: 'Important Expenses',
            headerRight: rightButton,
            tabBarIcon: ({focused}) => {
              return (
                <AntDesign 
              name="exclamation" 
              size={24} 
              color={focused ? Color.tabActive : Color.tabInactive} />
              )}
          }}
        }/>
        </Tab.Navigator>
    </React.Fragment>
  );
}

export default MainWithNav;