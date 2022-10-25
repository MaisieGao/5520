import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Button,SafeAreaView,ScrollView,FlatList } from 'react-native';
import { useState,useEffect } from 'react';
import Header from './Header';
import Input from './Input';
import GoalItem from './GoalItem';
import { deleteFromDB, writeToDatabase } from '../firebase/firestore';
import { collection, onSnapshot } from 'firebase/firestore';
import {firestore} from '../firebase/firebase-setup.js';


export default function Home({navigation}) {
  const [goals,setGoals]=useState([]);
  useEffect(()=>{
    onSnapshot(collection(firestore, "Goals"), (querySnapshot) => {
if(querySnapshot.empty){
  setGoals([]);
  return;
}
setGoals(
  querySnapshot.docs.map((snapDoc)=>{
    let data=snapDoc.data();
    data={...data,key:snapDoc.id};
    return data;
  })
)
      })
  },[])
  //goals=[{text:'learn',key:'random_number'}]
  const [modalVisible, setModalVisible]=useState(false);
  const name="My App";
  const makeModalVisible=()=>{setModalVisible(true)}
  const makeModalInvisible=()=>{setModalVisible(false)}


  function itemPressed(goal){
    console.log("item pressed");
    navigation.navigate('GoalDetails', {goalObject:goal});
  }

  const onTextAdd =function(newText){
    const newGoal={text:newText,key:Math.random()};
    writeToDatabase({text:newText});
    // setGoals((prevgoals)=>{return [...prevgoals,newGoal];})
    console.log(newText)
    setModalVisible(false)
    console.log(goals)  
  }

function onDelete(deletedKey){
  console.log(deletedKey)
  deleteFromDB(deletedKey)
  
//console.log('delete pressed')
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
      <Header appName={name}/>
      <Button title='Add A Goal' onPress={makeModalVisible}/>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList 
        data={goals} 
        renderItem={({item})=>{
          //switch to flatlist
          //there is {} outside of item
          //console.log(obj)
          // remove key prop in view
          return (
            <GoalItem goal={item} onCancel={onDelete} onItemPress={itemPressed} />
         //<View style={styles.textContainer}>
          //<Text>{item.text}</Text>
          //</View>
          )}}
        contentContainerStyle={styles.scrollViewItem}
        
      />
      </View>
      <Input modal={modalVisible} onCancel={makeModalInvisible} onAdd={onTextAdd}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  bottomContainer:{
    flex:4,
    backgroundColor:'pink',
    //alignItems:'center'  (moved to scrollviewitem)
  },
  scrollViewItem:{
    alignItems:'center'
  },
  textContainer:{
    backgroundColor:'#aaa',
    borderRadius:5,
    margin:20,
    color:'blue',
    padding:15,
 
  },
  text:{
    fontSize:12
  }


});

