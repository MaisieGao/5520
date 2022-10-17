
import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView, FlatList } from 'react-native';
import AddButton from '../../components/AddButton'
import ExpenseButton from '../../components/ExpenseButton';
export default function AllExpenses({navigation}) {
  const [goals, setGoals] = useState([])
  const onTextAdd = (nextText)=>{
    const newGoal = {text: nextText, key: Math.random()}
    setGoals((prevgoals)=>{return [...prevgoals,newGoal]})
  }
  const onTextDelete = (deleteKey) =>{
    const array = goals.filter((goal) => {return goal.key !== deleteKey});
    setGoals(array);
  }
  return (
    <SafeAreaView>
      <View>
        <AddButton/>
      <FlatList 
        data={goals} 
        // obj is a bigger thing wrapped goals. 
        // obj has three things--item, index, separators
        // you can defracture it to make it only print item
        renderItem={({item})=>{
          console.log(item)
          return(
            //passing this prop to the other component
            <ExpenseButton goal={item} onItemPress={itemPressed}/>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //set everything to be horizontal
  //   flexDirection: "row"
  }})