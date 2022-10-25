import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import helperForColor from '../helperForColor';
// Screens
import AllExpenses from './screens/AllExpenses';
import ImportantExpenses from './screens/ImportantExpenses';
import AddButton from '../components/AddButton';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, Text} from 'react-native'


function MainWithNav() {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();
 
  const rightButton = () =>{
    return <AddButton 
    onPress={() => {
      navigation.navigate('input',{page:'all'});
    } 
   }/>}
   const rightButton2 = () =>{
    return <AddButton 
    onPress={() => {
      navigation.navigate('input',{page:'importance'});
    } 
   }/>}
  return (
    <React.Fragment>
      <Tab.Navigator 
      
      screenOptions={{headerStyle: {
        backgroundColor: helperForColor.darkScreen,
      },
      headerTintColor: helperForColor.wordColor,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20
      },
      tabBarStyle: { backgroundColor: helperForColor.darkScreen, paddingBottom: 10},
    }}
      >
        <Tab.Screen 
          name="All Expenses"
          component={AllExpenses}
          options={() => {
            return {
              tabBarLabel: ({focused}) => (
                <Text 
                style={{color: focused ? helperForColor.tabActive : helperForColor.tabInactive,
                fontSize: 12
                }}>All Expenses</Text>
              ),
              headerRight: rightButton,
              tabBarIcon: ({focused}) => {
                return (
                  <FontAwesome 
                  name="dollar" 
                  size={25} 
                  color={focused ? helperForColor.tabActive : helperForColor.tabInactive} />
                )}
            }}
          }/>
        <Tab.Screen 
        name="Important Expenses"
        component={ImportantExpenses}
        style={styles.tabBar}
        options={() => {
          return {
            tabBarLabel: ({focused}) => (
              <Text 
              style={{color: focused ? helperForColor.tabActive : helperForColor.tabInactive,
              fontSize: 12
              }}>Important Expenses</Text>
            ),
            headerRight: rightButton2,
            tabBarIcon: ({focused}) => {
              return (
                <AntDesign 
              name="exclamation" 
              size={30} 
              color={focused ? helperForColor.tabActive : helperForColor.tabInactive} />
              )}
          }}
        }/>
        </Tab.Navigator>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  tabBar: {
   
    backgroundColor: helperForColor.lightScreen,
    
    //set everything to be horizontal
  //   flexDirection: "row"
  }})
export default MainWithNav;