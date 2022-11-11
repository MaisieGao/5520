import { View, Text,Dimensions,StyleSheet,useWindowDimensions,Platform } from 'react-native'
import React from 'react'

//these two values are not updated when the device is rotated
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Header({appName}) {
  //these two values  updated as the orientation changes
  const {width,height} = useWindowDimensions();
//if landscape: 0 padding
const paddingVerticalDynamic = height < 415 ? 0 : 10; 
  return (
    <View>
      {/* to have two styles */}
      <Text style={[styles.headertext,{paddingVertical:paddingVerticalDynamic}]}>Welcome to {appName}! </Text>
    </View>
  )
}
// my width is 350 but it is 90% of the parent width if screen width is > 350
// width:350,
// maxWidth:'90%'
const styles = StyleSheet.create({
  headertext:{
    fontsize: windowWidth< 380? 18: 22,
    paddingHorizontal: windowWidth < 380 ? 10: 20,
    borderWidth: Platform.OS === 'android'?4:0,
    borderWidth:Platform.select({ios:0, android:4})
  }
})