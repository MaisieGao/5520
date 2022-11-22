import { View, Text,Button,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import { MAPS_API_KEY } from "@env";
import { useNavigation, useRoute } from "@react-navigation/native";
import { saveUser,getUser } from '../firebase/firestore';
export default function LocationManager() {

    const [permissionResponse, requestPermission] = Location.useForegroundPermissions();
    const [location, setLocation] = useState(null)
    const navigation = useNavigation();
    const route = useRoute();
    useEffect(()=>{
       async function getUserLocation(){
           try{
           const storageLocation = await getUser();
           setLocation(storageLocation)
           }catch{
               console.log(err)
           }
       }
       getUserLocation();
        //only render when route changes
    },[])
    //save location in users collection
    const saveUserLocation = async () => {
        await saveUser(location);
      };
      //Location passed back from map
    //change the location from initial location to picked location and show it on the map
    
    useEffect(()=>{
        if(route.params){
            setLocation({
                latitude: route.params.currentLocation.latitude,
                longitude: route.params.currentLocation.longitude,
            })
        }
        //only render when route changes
    },[route])
    //get permission to access location from user
    const verifyPermission = async() =>{

        if(permissionResponse.granted){
            return true;
        }
        const requestPermissionResponse = await requestPermission();
        return requestPermissionResponse.granted;
    };
    //get current location and set it in location
    const locateUserHandler = async() =>{
        try {
            const hasPermission = await verifyPermission();
            if(!hasPermission){
                return;
            }
            const currentPosition = await Location. getCurrentPositionAsync();
            console.log(currentPosition)
            setLocation({
                latitude: currentPosition.coords.latitude,
                longitude: currentPosition.coords.longitude,
              });            
            }
            catch (err) {
                console.log('locate user',err)
            }
    }
    //when press "let me pick on the map" button, go to map page with the
    //location set as initial location
    const locatePickerHandler = () =>{
        //pass location into map
        navigation.navigate("Map", { initialLocation: location });
    }
  return (
    <View>
        {location && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${MAPS_API_KEY}`,
          }}
          style={{ width: "100%", height: 200 }}
        />
      )}
      <Button title='locate me' onPress={locateUserHandler}/>
      <Button title='let me pick on the map' onPress={locatePickerHandler}/>
      <Button title='saveLocation' onPress={saveUserLocation}/>

    </View>
  )
}