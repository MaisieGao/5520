import { View, Text,TextInput,Button,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase-setup';
export default function SignIn({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignIn = async() => {
        if (password.length < 6){
            Alert.alert('Password is too short')
            return;
        }
        try{
        const userCred = await signInWithEmailAndPassword(auth,email,password)
            console.log(userCred)
        } catch(err){
            console.log(err)
        }
    }
  return (
    <View>
      <Text>Email Address</Text>
      <TextInput
      placeholder='email'
      style={styles.input}
      onChangeText={(newText)=>{setEmail(newText)}}
      value={email}
      keyboardType="email-address"
      />
      <Text>Password</Text>
      <TextInput
      placeholder='password'
      style={styles.input}
      onChangeText={(newText)=>{setPassword(newText)}}
      value={password}
      secureTextEntry={true}
      />
      <View>
          <Button title='log In' onPress={handleSignIn}/>
      </View>
      <View>
          {/* we don't want to go back to the other page, so we use replace */}
          <Button title='New User? Create Account' onPress={()=>navigation.replace('SignUp')}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({})