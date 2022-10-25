
import React,{useState,useEffect} from 'react'
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import helperForColor from '../../helperForColor';
import ExpenseButton from '../../components/ExpenseButton';
import { collection, onSnapshot } from 'firebase/firestore';
import {firestore} from '../../firebase/firebase-setup.js';


export default function AllExpenses() {

  const [expenses, setExpense] = useState([])
  //get data from expense collection and set data as expense
  useEffect(()=>{
    onSnapshot(collection(firestore, "Expenses"), (querySnapshot) => {
if(querySnapshot.empty){
  setExpense([]);
  return;
}
setExpense(
  querySnapshot.docs.map((snapDoc)=>{
    let data=snapDoc.data();
    data={...data,key:snapDoc.id};
    return data
  })
)
      })
  },[])

 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.margin}></View>
      <View style={styles.scroll}>
        {expenses?
        <FlatList 
        data={expenses} 
        // obj has three things--item, index, separators
        renderItem={({item})=>{        
          return(
            //passing assign is 2 to expense button to note the button is clicked from All Expenses page
            <ExpenseButton  item={item} assign={'all'}/>
          )
        }}
        contentContainerStyle={styles.contentContainer} 
       >
        </FlatList>
        :
        <View></View>
        }
      
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: helperForColor.lightScreen,
  },
  margin:{
    flex:1
  },
  scroll:{
    flex: 20
  }
})