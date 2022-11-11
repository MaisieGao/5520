import Home from './components/Home';
import GoalDetail from './components/GoalDetail';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState,useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase/firebase-setup';
// if you want to use this function, you have to export it
const rightButton = () =>{
  return <Button onPress={()=>{return(console.log('success'))}} title='+'></Button>
}
const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated,setIsAuthentiacated] = useState(false)

  useEffect(()=>{
    onAuthStateChanged(auth,(user) =>{
      if(user){
        setIsAuthentiacated(true)
      }else{
        setIsAuthentiacated(false)
      }
    })
  })

  const AuthStack = () => {return(
    <Stack.Navigator 
      initialRouteName='SignIn'
      screenOptions={{headerStyle: {
          backgroundColor: 'purple',
        },
        headerTintColor: '#fff',}}>
<Stack.Screen name="SignIn" component={SignIn} />
<Stack.Screen name="SignUp" component={SignUp} />
      
          
      </Stack.Navigator>
  )}

const AppStack = () => {return(
  <Stack.Navigator 
    initialRouteName='Home'
    screenOptions={{headerStyle: {
        backgroundColor: 'purple',
      },
      headerTintColor: '#fff',}}>
  
 <Stack.Screen name="Home" component={Home} 
        options={({navigation})=>{
          return { 
          title: 'All my goals' ,
            headerRight: () => {
              return(
                <Button
                title='profile'
                onPress={()=>navigation.navigate('Profile')}
                />
              )
            }
      }}}
        />
<Stack.Screen name="Profile" component={Profile} 
options={({navigation})=>{
  return { 
    headerRight: () => {
      return(
        <Button
        title='LogOut'
        onPress={()=>signOut(auth)}
        />
      )
    }
}}}
/>
<Stack.Screen name="GoalDetails" component={GoalDetail} 
options={({ route,navigation }) => {
  return {
    title: route.params.goalObject.text, 
    headerRight: rightButton
  }}}/>
    
        
    </Stack.Navigator>
)}

  return(
    <NavigationContainer>
      {/* pass object pass javascript--two level of {} */}
      
      {isAuthenticated?AppStack():AuthStack()}
    </NavigationContainer>
    
  )
}