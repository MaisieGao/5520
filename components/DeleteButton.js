import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function DeleteButton({ onDelete}) {
  
  return (
    <Pressable  
    onPress={onDelete} 
    
    >
        <View style={styles.button}>
        <FontAwesome name="trash-o" size={24} color="black" />
        </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
   
    button:{
        flex:1,
        fontSize:18,
        justifyContent:'center'
    }

});