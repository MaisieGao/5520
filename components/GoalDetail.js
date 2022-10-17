import { View, Text } from 'react-native'
import React from 'react'

export default function GoalDetail({route,navigation}) {
  return (
    <View>
      <Text>You are viewing the details of {route.params.goalObject.text}</Text>
    </View>
  )
}