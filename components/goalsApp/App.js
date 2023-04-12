import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  FlatList,
} from 'react-native';
import GoalInput from './components/goalsApp/GoalInput';
import GoalItem from './components/goalsApp/GoalItem';


const App = () => {
  const [goals, setGoals] = React.useState([]);
  const [isModelOpen, setIsModelOpen] = React.useState(false);

  console.log(goals);

  const onDeleteGoal = goalId => {
    setGoals(currentGaols => {
      return currentGaols.filter(goal => goal.id !== goalId)
    });

  }

  const cancelGoalAdditionHandler = () => {
    setIsModelOpen(false);
  };
  
  const addGoalHandler = enteredGoal =>{
    console.log(enteredGoal);
    setGoals(currentGaols => [
      ...currentGaols, {id: Math.random().toString(), value:enteredGoal}
    ]);
    setIsModelOpen(false);
  } 
  return(

    <View style={styles.screen}>
      <View><Button title='Add a Course Goal' onPress={() =>{ setIsModelOpen(true)}}/></View>
      <GoalInput 
     visible={isModelOpen}
     onAddGoal={addGoalHandler}
     onCancel={cancelGoalAdditionHandler}
    />
      <View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={onDeleteGoal}
            title={itemData.item.value}
          />
        )}
      />
      </View>
     
    </View>

  )
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
  
});

export default App;