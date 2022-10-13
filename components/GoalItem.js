import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import DeleteButton from './DeleteButton'
export default function GoalItem({goal,onCancel, onItemPress}) {
   const onCancelGoalItem = () =>{
        onCancel(goal.key);
   }
  return (
    <Pressable onPress={onItemPress} 
    android_ripple={{color:"#25555",foreground:true,radius:1}}
    style={(obj)=>{
      
      return obj.pressed && styles.pressedItem;
    }}
    >
    <View style={styles.textBox} key={goal.key}>
    <Text style={styles.text}>{goal.text}</Text>
    <DeleteButton onDelete={onCancelGoalItem}/>
    </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    textBox:{
        borderRadius: 5,
        backgroundColor: "#aaa",
        color: "blue",
        padding: 5,
        margin:30,
        padding:30,
        // make the button go horizontal
        display:'flex',
        flexDirection: "row",
        alignItem: "center"
      },
      text:{
        fontSize: 50
      },
    
      pressedItem:{
        backgroundColor:'red',
        opacity:0.5
      }
});