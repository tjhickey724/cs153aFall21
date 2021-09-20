import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// const App = () => {...}
const MealCalculator = ({restName,initMealCost,taxRate,tipRate}) => {
  [mealCost,setMealCost] = useState(initMealCost)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
          Restaurant Helper for {restName}
      </Text>
      <View>
        <TextInput placeholder={mealCost} on>
        <Text>The tax rate is {taxRate}</Text>
        <Text>The tip rate is {tipRate}</Text>
        <Text>The total cost of your meal is
            {mealCost*(1+taxRate/100)*(1+tipRate/100)}</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width:'25%',
    margin:'20px',
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'thin solid blue',
  },
  header: {
    fontSize:32,
    padding:25,
    color:"red",
    backgroundColor:'black',
  }
});

export default MealCost
