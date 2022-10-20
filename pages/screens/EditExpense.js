import { Alert,Pressable,StyleSheet,View, Text } from 'react-native'
import React from 'react'
import Color from '../../components/Color';
import { useNavigation } from '@react-navigation/native';

export default function EditExpense() {
    const navigation = useNavigation();
    const onDelete = () =>{
        console.log("Delete Pressed") 
      }
      const markAsImportant = () =>{
        Alert.alert(
            "Important",
            "Are you sure you want to mark this as important?",
            [
              {
                text: "No",
                onPress: () => navigation.navigate('edit'),
                style: "cancel"
              },
              { text: "Yes", onPress: () => console.log("OK Pressed") }
            ]
          );
      }
  return (
    <View style={styles.container}>
    <View style={styles.buttonBox}>
    
    <Pressable
        style={styles.button}
        onPress={markAsImportant}>
        <Text
        style={styles.appButton} >
        Mark as important
        </Text>
    </Pressable>
    
    <Pressable
        style={styles.button}
        onPress={onDelete}>
        <Text
        style={styles.appButton} >
        Delete
        </Text>
    </Pressable>
    
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.lightScreen,
      alignItems: 'center',
      
      //set everything to be horizontal
    //   flexDirection: "row"
    },
    buttonBox:{
        marginTop: 30
    },
    button:{
        width: 150,
        height: 37,
        backgroundColor: Color.darkScreen,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 4,
        margin: 9,
        borderRadius: 6,
        elevation: 3,
    },
    appButton:{
        fontSize: 16,
        letterSpacing: 0.25,
        color: 'white',
    },
});