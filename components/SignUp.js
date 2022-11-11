import { View, Text,TextInput,Button,StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { auth } from '../firebase/firebase-setup';
import { createUserWithEmailAndPassword } from "firebase/auth";
export default function SignIn({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Confirmpassword, setConfirmpassword] = useState('')
    const handleSignUp = async() => {
        if (password.length < 6){
            Alert.alert('Password is too short')
            return;
        }
        if (password != Confirmpassword){
            Alert.alert('Password does not match');
            return;
        }
        try{
        const userCred = await createUserWithEmailAndPassword(auth,email,password)
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
      <Text>Confirm Password</Text>
      <TextInput
      placeholder='password'
      style={styles.input}
      onChangeText={(newText)=>{setConfirmpassword(newText)}}
      value={Confirmpassword}
      secureTextEntry={true}
      />
      <View>
          <Button title='Sign up' onPress={handleSignUp} />
      </View>
      <View>
          <Button title='Already have an Account? Sign in' onPress={()=>navigation.replace('SignIn')}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({})