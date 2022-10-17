
import { View, SafeAreaView,Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

export default function AddButton({onNavigate}) {
  
  return (
    <Pressable  
    onPress={onNavigate} 
    >
        <View style={styles.button}>
        <Ionicons name="add" size={24} color="black" />
        </View>
    </Pressable>

  )
}
const styles = StyleSheet.create({
   
    button:{
        
        fontSize:18,
        justifyContent:'center'
    }

});