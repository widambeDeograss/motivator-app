import React from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = React.useState('');

    

    const onAddGoalhandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    const goalInputHandler = enteredText => {
      setEnteredGoal(enteredText);
    };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={style.goals}>
      <View >
       <TextInput placeholder='enter your goal..' style={style.goalinput} value={enteredGoal}  onChangeText={goalInputHandler}/>
       </View>
       <View style={style.buttons}>
       <View style={style.button}><Button title='cancel'  onPress={props.onCancel} /></View>
       <View style={style.button}><Button title='add Goal' onPress={onAddGoalhandler}/></View>
       </View>
       
      </View>
    </Modal>
    
  )
}

const style = StyleSheet.create({
     goals:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
     },
     goalinput:{
      width: 300,
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10
     },
     buttons:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: "80%"
     },
     button:{
        width:'40%'
     }

})

export default GoalInput