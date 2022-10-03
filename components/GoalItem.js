import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function GoalItem({goal,onCancel}) {
   const onCancelGoalItem = (key) =>{
        onCancel(goal.key);
   }
  return (
    <View style={styles.textBox} key={goal.key}>
    <Text style={styles.text}>{goal.text}</Text>
    <Button 
    style={styles.button}
    title="x"
    onPress={onCancelGoalItem}
    color="#444"
 />
    </View>
  )
}
const styles = StyleSheet.create({
    textBox:{
        borderRadius: 5,
        backgroundColor: "#aaa",
        color: "blue",
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
      button:{
          fontSize: 20
      }
});