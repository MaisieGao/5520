import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Color from '../components/Color';
// Screens
import AllExpenses from './screens/AllExpenses';
import ImportantExpenses from './screens/ImportantExpenses';
import AddButton from '../components/AddButton';
import Input from './screens/InputExpense';

const Tab = createBottomTabNavigator();

function MainWithNav() {
  return (
    <React.Fragment>
    
    <NavigationContainer>
    
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen 
          name="home"
          component={AllExpenses}
          options={{
            title: 'All Expenses',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: ({focused}) => {
              return (
                <FontAwesome 
                name="dollar" 
                size={24} 
                color={focused ? Color.tabActive : Color.tabInactive} />
              );
            },
          }}/>
        <Tab.Screen 
        name="important"
        component={ImportantExpenses}
        options={{
          title: 'Important Expenses',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign 
              name="exclamation" 
              size={24} 
              color={focused ? Color.tabActive : Color.tabInactive} />
            );
          },
        }}
         />
         
        </Tab.Navigator>
     
    </NavigationContainer>
    </React.Fragment>
  );
}

export default MainWithNav;