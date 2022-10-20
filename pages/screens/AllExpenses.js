
import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView, FlatList } from 'react-native';
import AddButton from '../../components/AddButton'
import Color from '../../components/Color';
import ExpenseButton from '../../components/ExpenseButton';
export default function AllExpenses({navigation}) {
  const expenses = [
    {
      key:1,
      expense: 'car'
    },
    {
      key:2,
      expense: 'eat'
    }
  ]
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.margin}></View>
      <View style={styles.scroll}>
      <FlatList 
        data={expenses} 
        // obj is a bigger thing wrapped goals. 
        // obj has three things--item, index, separators
        // you can defracture it to make it only print item
        renderItem={({item})=>{
          console.log(item)
          return(
            //passing this prop to the other component
            <ExpenseButton goal={item} />
          )
        }}
        contentContainerStyle={styles.contentContainer} 
       >
        </FlatList>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightScreen,
  },
  margin:{
    flex:1
  },
  scroll:{
    flex: 20
  }
})