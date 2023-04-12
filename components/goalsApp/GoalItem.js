import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function GoalItem(props) {
  console.log(props);
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <View style={style.goalitem}>
    <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  )
}
const style = StyleSheet.create({
    goalitem:{
      padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
    }
})

export default GoalItem