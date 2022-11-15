import { View, Text,Image, Button, ImagePickerIOS } from 'react-native'
import React, { useState } from 'react'

import * as ImagePicker from 'expo-image-picker';
export default function ImageManager({imageManager}) {
    const [permissionInfo, requestPermission] = ImagePicker.useCameraPermissions();
    const [imageUrl, setImageUrl] = useState('')
    const verifyPermission = async() =>{
        // check the permssionInfo, if the status is granted..., else request permission
        if(permissionInfo.granted){
            return true
        }else{
            const requestPermissionResponse = await requestPermission();
            return requestPermissionResponse.granted;
        }
    }
    const takeImageHandler = async () =>{
        try{
            const hasPermission = await verifyPermission()
            //only if hasPermission is true, process
            if(!hasPermission){
                return;
            }
            
            const result = await ImagePicker.launchCameraAsync({allowsEditing:true});
            // if(!result.cancelled){
            //     setImageUrl(result)
            // }
            setImageUrl(result.uri)
            //call the function
            imageManager(result.uri)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <View>
      <Button title='Take an image' onPress={takeImageHandler}/>
      {imageUrl?<Image source={{url: imageUrl}}/>:<Text>No image Yet</Text>}
    </View>
  )
}