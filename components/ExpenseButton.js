
import { View, StyleSheet, Pressable,Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ExpenseButton({goal}) {
    const navigation = useNavigation();
    const onItemPress = () =>{
      navigation.navigate('edit');
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