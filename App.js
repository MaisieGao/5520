import Home from './components/Home';
import GoalDetail from './components/GoalDetail';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// if you want to use this function, you have to export it
const rightButton = () =>{
  return <Button onPress={()=>{return(console.log('success'))}} title='+'></Button>
}
const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      {/* pass object pass javascript--two level of {} */}
      <Stack.Navigator screenOptions={{headerStyle: {
          backgroundColor: 'purple',
        },
        headerTintColor: '#fff',}}>
        <Stack.Screen name="Home" component={Home} 
        options={{ title: 'All my goals' 
        
      }}
        />
        <Stack.Screen name="GoalDetails" component={GoalDetail} 
        options={({ route,navigation }) => {
          return {
            title: route.params.goalObject.text, 
            headerRight: rightButton
          }}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}