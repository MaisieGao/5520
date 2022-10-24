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
import {StyleSheet, Text} from 'react-native'


function MainWithNav() {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();
 
  const rightButton = () =>{
    return <AddButton 
    onPress={() => {
      navigation.navigate('input','all');
    } 
   }/>}
   const rightButton2 = () =>{
    return <AddButton 
    onPress={() => {
      navigation.navigate('input','importance');
    } 
   }/>}
  return (
    <React.Fragment>
      <Tab.Navigator 
      
      screenOptions={{headerStyle: {
        backgroundColor: Color.darkScreen,
      },
      headerTintColor: Color.wordColor,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      tabBarStyle: { backgroundColor: Color.darkScreen, paddingBottom: 10},
    }}
      >
        <Tab.Screen 
          name="All Expenses"
          component={AllExpenses}
          options={() => {
            return {
              tabBarLabel: ({focused, color, size}) => (
                <Text 
                style={{color: focused ? Color.tabActive : Color.tabInactive,
                fontSize: 12
                }}>All Expenses</Text>
              ),
              headerRight: rightButton,
              tabBarIcon: ({focused}) => {
                return (
                  <FontAwesome 
                  name="dollar" 
                  size={25} 
                  color={focused ? Color.tabActive : Color.tabInactive} />
                )}
            }}
          }/>
        <Tab.Screen 
        name="Important Expenses"
        component={ImportantExpenses}
        style={styles.tabBar}
        options={() => {
          return {
            tabBarLabel: ({focused, color, size}) => (
              <Text 
              style={{color: focused ? Color.tabActive : Color.tabInactive,
              fontSize: 12
              }}>Important Expenses</Text>
            ),
            headerRight: rightButton2,
            tabBarIcon: ({focused}) => {
              return (
                <AntDesign 
              name="exclamation" 
              size={30} 
              color={focused ? Color.tabActive : Color.tabInactive} />
              )}
          }}
        }/>
        </Tab.Navigator>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  tabBar: {
   
    backgroundColor: Color.lightScreen,
    
    //set everything to be horizontal
  //   flexDirection: "row"
  }})
export default MainWithNav;