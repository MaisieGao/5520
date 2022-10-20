
import { View, SafeAreaView,Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

export default function AddButton({onPress}) {
  
  return (
    <Pressable  
    onPress={onPress} 
    >
        <View>
        <Ionicons name="add" size={28} color="black" style={styles.button}/>
        </View>
    </Pressable>

  )
}
const styles = StyleSheet.create({
    button:{ 
        marginRight: 5     
    }
});