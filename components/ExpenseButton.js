
import { View, StyleSheet, Pressable,Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Color from './Color';

export default function ExpenseButton({goal}) {
    const navigation = useNavigation();
    const onItemPress = () =>{
      navigation.navigate('edit');
   }
   
  return (
    <Pressable onPress={onItemPress} 
    android_ripple={{color:"#9370db"}}
    style={(obj)=>{
      return obj.pressed && styles.pressedItem;
    }}>
    <View style={styles.textBox} key={goal.key}>
    <Text style={styles.text}>{goal.text}</Text>
    </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
   
    textBox:{
        borderRadius: 5,
        backgroundColor: Color.darkScreen,
        color: "blue",
        marginVertical:15,
        marginHorizontal:30,
        height: 60,
        
        // make the button go horizontal
        display:'flex',
        flexDirection: "row",
        alignItem: "center"
      },
      text:{
        fontSize: 50
      },
      pressedItem:{
        color: Color.pressButton,
        opacity:0.5
      }

});