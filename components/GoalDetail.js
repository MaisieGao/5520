import { View, Text,FlatList, Button } from 'react-native'
import React,{useEffect, useState} from 'react'

export default function GoalDetail({route,navigation}) {
  const [user,setUser] = useState([])
  //in useEffect, the function can only return a cleanup function
  //not a promise
  //so we define a seperate function inside useEffect
  useEffect(() => {
    const fetchUsers = async () => {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok){//status code is 200-299
      //the fetch doesn't reject the promise even the data is not found
      //so we have to do it manually
      throw new Error('the fetch request failed')
    }
    //fetch was successful
    //catch js object
    const data = await response.json();
    setUser(data)
    }
    //if fetch fail, has something to catch the error
    catch (error) {
      console.log(error)
    }}
    //call the function
    fetchUsers();
    }, []);
    const addUser = async() =>{
      try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        //if we have js object,we need to convert to json to sent to server
        body:JSON.stringify({name:'Maisie'})
      })
      if(!response.ok){
        throw new Error('post fetch failed')
      }
      //data is the result of successful post request
      const Data = await response.json()
      console.log(Data)
      setUser(prevUsers=>[...prevUsers,Data])
    }catch(err){
      console.log(err)
    }
    }
  return (
    <View>
      <Text>You are viewing the details of {route.params.goalObject.text}</Text>
      <Button title='add user' onPress={addUser}></Button>
      <FlatList data={user} 
      //a function that calls each user
      renderItem={({item})=>{
        return <Text>{item.name}</Text>
      }}/>
    </View>
  )
}