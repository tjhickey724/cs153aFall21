import React, { useState, useEffect }  from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Pomodoros = (props) => {
  const [dateTime,setDateTime] = useState("")
  const [goal,setGoal] = useState("")
  const [result,setResult] = useState("")
  const [pomodoros,setPomodoros]= useState([])

  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@pomodoros')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setPomodoros(data)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setPomodoros([])
            setDateTime("")
            setGoal("")
            setResult("")
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@pomodoros', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }


  const renderPomodoro = ({item}) => {
    return (
      <View style={styles.pomodoro}>
           <Text>When: {item.dateTime} by </Text>
           <Text>Goal: {item.goal} </Text>
           <Text>Result: {item.result} </Text>

      </View>
    )
  }

  let debug=false
  const debugView =
    (<View>
      <Text style={styles.headerText}>
        DEBUGGING INFO
      </Text>
      <Text>
         dateTime is ({dateTime})
      </Text>
      <Text>
         goal is ({goal})
      </Text>
      <Text>
         result is ({result})
      </Text>
      <Text>
         pomodoros is {JSON.stringify(pomodoros)}
      </Text>
  </View>);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Quiz 3: Pomodoros! </Text>
      <Text>
         Create this app as a single component classed Pomodoro with no props. A pomodoro contains a date, a goal, and a result which the user enters into the TextInputs below. When they press the button the pomodoro gets added to the list of pomorodos which is stored in AsyncStorage and displayed below. The pomodoros are displayed with flex-direction 'row' and justifyContent 'space-between'
      </Text>
      <View style={{flexDirection:'row',
                    margin:'20px',
                    justifyContent:'space-around'}}>
            <TextInput
              style={{fontSize:10}}
              placeholder="Date/Time"
              onChangeText={text => {
                   setDateTime(text);
                 }}
              value = {dateTime}
            />

            <TextInput
              style={{fontSize:12}}
              placeholder="Goal"
              onChangeText={text => {
                   setGoal(text);
                 }}
              value = {goal}
            />

            <TextInput
              style={{fontSize:12}}
              placeholder="Result"
              onChangeText={text => {
                   setResult(text);
                 }}
              value = {result}
            />
        </View>
        <View style={{flexDirection:'row',
                      justifyContent:'space-around'}}>
        <Button
               title={"Record"}
               color="blue"
               onPress = {() => {
                 const newPomodoros =
                   pomodoros.concat(
                     {'dateTime':dateTime,
                      'goal':goal,
                      'result':result,
                      'completed':new Date()
                   })
                 setPomodoros(newPomodoros)
                 storeData(newPomodoros)
                 setDateTime("")
                 setGoal("")
                 setResult("")
               }}
               />
        <Button
                title={"Clear"}
                color="red"
                onPress = {() => {
                  clearAll()
                  setPomodoros([])
                }}
                />

      </View>

      <FlatList
        data={pomodoros}
        renderItem={renderPomodoro}
        keyExtractor={item => item.dateTime}
      />
      {debug?debugView: <Text></Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#eee',
    justifyContent: 'center',
    textAlign:'left',
    marginTop:20,
    padding:20,
  },
  pomodoro:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  headerText: {
    textAlign:'center',
    backgroundColor:'#aaa',
    fontSize: 32,
    padding:10,
    color: 'blue'
  },

});


export default Pomodoros;
