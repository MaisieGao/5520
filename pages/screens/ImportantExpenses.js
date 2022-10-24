
import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView, FlatList } from 'react-native';
import AddButton from '../../components/AddButton'
import Color from '../../components/Color';
import ExpenseButton from '../../components/ExpenseButton';
import db from '../../Firebase.js'; 
import { collection, doc, onSnapshot, addDoc } from 'firebase/firestore';

export default function AllExpenses() {
  const [importants, setImportants] = useState([])
  //get data from ImportantExpenses collection and mark data as importants 
  useEffect(()=>{
    onSnapshot(collection(db,'ImportantExpenses'),(snapshot)=>{
      setImportants(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
    },[]);
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.margin}></View>
      <View style={styles.scroll}>
        {importants?
        <FlatList 
        data={importants} 
        renderItem={({item,index})=>{
         
          return(
          //passing assign is 1 to expense button to note the button is clicked from important page
            <ExpenseButton item={item} index={index} assign={'1'}/>
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
    backgroundColor: Color.lightScreen,
  },
  margin:{
    flex:1
  },
  scroll:{
    flex: 20
  }
})