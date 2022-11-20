import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Button,SafeAreaView,ScrollView,FlatList } from 'react-native';
import { useState,useEffect } from 'react';
import Header from './Header';
import Input from './Input';
import GoalItem from './GoalItem';
import { deleteFromDB, writeToDatabase } from '../firebase/firestore';
import { collection, onSnapshot,query,where } from 'firebase/firestore';
import { firestore, auth, storage } from "../firebase/firebase-setup";

import { uploadBytes,ref } from 'firebase/storage';
export default function Home({navigation}) {
  const [goals,setGoals]=useState([]);
  useEffect(()=>{
    const unsubscribe = onSnapshot(query(collection(firestore, "Goals"), where("user", "==", auth.currentUser.uid)), 
    (querySnapshot) => {
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
)},
    (err) =>{
      console.log(err)
    }
      );
      return () => {
        unsubscribe();
      }
  },[])
  //goals=[{text:'learn',key:'random_number'}]
  const [modalVisible, setModalVisible]=useState(false);
  const name="My App";
  const makeModalVisible=()=>{setModalVisible(true)}
  const makeModalInvisible=()=>{setModalVisible(false)}
  const getImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      return blob;
    } catch (err) {
      console.log("fetch image ", err);
    }
  };
  const onTextAdd = async function (newObj) {
    const uri = newObj.uri;
    try {
      if (uri) {
        const imageBlob = await getImage(uri);
        const imageName = uri.substring(uri.lastIndexOf("/") + 1);
        const imageRef = await ref(storage, `images/${imageName}`);
        const uploadResult = await uploadBytes(imageRef, imageBlob);
        newObj.uri = uploadResult.metadata.fullPath; //replaced the uri with reference to the storage location
      }
      await writeToDatabase(newObj);
    } catch (err) {
      console.log("image upload ", err);
    }
    setModalVisible(false);
  };

  function itemPressed(goal){
    console.log("item pressed");
    navigation.navigate('GoalDetails', {goalObject:goal});
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

