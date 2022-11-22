import { View, Button,Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
export default function Map({route,navigation}) {
    const[currentLocation, setCurrentLocation] = useState(null)
    //when map is pressed, pick a location
    //set the location to be showed in the marker
    const mapPressed = (event) =>{
        setCurrentLocation({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude,
        })
    }
    //pass the picked location back to profile
    const confirmHandler = () => {
        navigation.navigate("Profile", { currentLocation: currentLocation });
      };
  return (
    <>
    <MapView style={styles.map}
    onPress={mapPressed}
    initialRegion={{
        latitude: route.params.initialLocation? 
        route.params.initialLocation.latitude:
        37.78825,
        longitude: route.params.initialLocation
            ? route.params.initialLocation.longitude
            : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
    }}
    >
        {currentLocation && <Marker coordinate={currentLocation} />}
    </MapView>
 <Button
 disabled={!currentLocation}
 title="Confirm Selected Location"
 onPress={confirmHandler}
/>
</>
  )
}
const styles = StyleSheet.create({
    map:{
        height: "80%",
    },
})