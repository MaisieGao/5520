import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView, FlatList } from 'react-native';
import GoalItem from './GoalItem';
import Header from './Header'
import Input from './Input'
// if you want to use this function, you have to export it
export default function Home({navigation}) {
  const name = "my app"
  
  const [goals, setGoals] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const onTextAdd = (nextText)=>{
    setModalVisible(false)
    const newGoal = {text: nextText, key: Math.random()}
    setGoals((prevgoals)=>{return [...prevgoals,newGoal]})
  }
  const onTextDelete = (deleteKey) =>{
    const array = goals.filter((goal) => {return goal.key !== deleteKey});
    setGoals(array);
  }
  const makeModalVisible = () => {setModalVisible(true)}
  const makeModalInvisible = () => {setModalVisible(false)}
  const itemPressed = (goal) =>{
    console.log('item pressed')
    navigation.navigate('GoalDetails',{goalObject:goal})
}
  
  
  return (
    <SafeAreaView style={styles.safeContainer}>
    
      <View style={styles.head}>
      <Header appName={name}/>
      <Button title="add a goal" onPress={makeModalVisible}/>
      <Input  modal={modalVisible} onAdd={onTextAdd} onCancel={makeModalInvisible}/>
      <StatusBar style="auto" />
      </View>
      {/* scrollview's parent is supposed to have a height */}
      <View style={styles.bottom}>
        <FlatList 
        data={goals} 
        // obj is a bigger thing wrapped goals. 
        // obj has three things--item, index, separators
        // you can defracture it to make it only print item
        renderItem={({item})=>{
          console.log(item)
          return(
            //passing this prop to the other component
            <GoalItem goal={item} onCancel={onTextDelete} onItemPress={itemPressed}/>
          )
        }}
        contentContainerStyle={styles.contentContainer} 
       >
          {/* scrollview render everything at once
          {goals.map((goal)=>{return (
            // we need a key prop to make each goal have a special key
            <View style={styles.textBox} key={goal.key}>
            <Text style={styles.text}>{goal.text}</Text>
            </View>)
          
          })} */}
        </FlatList>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    //when you have a percentage for your children, we need a height for parent
    //either flex or height
    // flex: 1,
    height: "100%",
    // flex take all the space you have 
    // vertically
    justifyContent: 'center',
    // flexDirection: "row"
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  head:{
    flex:1,
    // horizontally
    alignItems: 'center',
  },
  bottom:{
    flex:4,
    backgroundColor: 'pink',
  },
 

 contentContainer: {
  // alignItem is in scrollview styling not in view styling
  alignItems: 'center',
}
});
