
import { View, StyleSheet, Pressable,Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Color from './Color';


export default function ExpenseButton({item,assign}) {
    const navigation = useNavigation();
    //when press button, it should navigate to edit page
    const onItemPress = () =>{
      //it should pass the params to edit page so edit page can use the info
      navigation.navigate('edit',{
        key:item.key,
        amount:item.amount,
        description:item.description,
        From:assign
      });
     
   }
  
  return (
    <Pressable onPress={onItemPress} 
    android_ripple={{color:"#9370db"}}
    style={(obj)=>{
      return obj.pressed && styles.pressedItem;
    }}>
    <View style={styles.textBox} key={item.key}>
    <Text style={styles.text}>{item.amount}</Text>
    <Text style={styles.text}>{item.description}</Text>
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