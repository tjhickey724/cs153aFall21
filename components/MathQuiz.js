/*
  MathQuiz.js - this component will generate arithmetic questions
  and ask the user to solve them. It keeps track of the number they
  got right and the total number of questions they answered.
  It generates random numbers in the range 0 to n for products
*/
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const MathQuiz = ({n}) => {
  const [x, setX] = useState(Math.round(Math.random()*n));
  const [y, setY] = useState(Math.round(Math.random()*n));
  const [correct, setCorrect] = useState(0);
  const [answer,setAnswer] = useState('')
  const [result,setResult] = useState('waiting')
  const [answered,setAnswered] = useState(0)
  const [debugging,setDebugging] = useState(false)

  useEffect(() => {getData()}
           ,[])

  useEffect(() => {
    storeData({correct,answered})
  },[correct,answered])

  let debugView = ""
  if (debugging) {
    debugView =
      <View>
          <Text> x: {x} </Text>
          <Text> y: {y} </Text>
          <Text>answer: {answer} </Text>
          <Text> correct: {correct} </Text>
          <Text> answered: {answered} </Text>
          <Text> result: {result} </Text>
          <Button title="clear memory"
              onPress={()=> clearAll()}/>
      </View>
  }

  let responseView = (<View></View>)

  if (result=="waiting") {
    responseView = (
      <Button
          color="red"
          title="check answer"
          onPress={()=> {
            let a = parseInt(answer)
            if (a == x*y){
              //storeData({correct:correct+1,answered:answered+1})
              setResult('correct')
              setCorrect(correct+1)
            } else {
              //storeData({correct:correct,answered:answered+1})
              setResult('incorrect')
            }

            setAnswered(answered+1)

          }}
      />
    )
  } else {
    responseView =  (
      <View style={
         {
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'space-around'}}>
          <Text style={{fontSize:32,color:'red'}}>
            {result=='correct'?"Correct!!":`Sorry, answer was ${x*y}, try again!`}
          </Text>

          <Button
                color='green'
                title='Next Question???'
                onPress = {() => {
                  setX(Math.round(Math.random()*n))
                  setY(Math.round(Math.random()*n))
                  setResult('waiting')
                  setAnswer('')
                }}

            />
        </View>
      )
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@mathquiz', jsonValue)
        } catch (e) {
          console.dir(e)
        }
  }

  const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@mathquiz')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setCorrect(data.correct)
            setAnswered(data.answered)
          } else {
            setCorrect(0)
            setAnswered(0)
          }
        } catch(e) {
          console.dir(e)
        }
  }

  const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          console.dir(e)
        }
  }


  return (
        <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start'}}>
          <Text style={{fontSize:60, color:'blue'}}>
             Math Quiz for numbers between 0 and {n}
          </Text>
          <Text style={{fontSize:40}}>
            Calculate the product of the following two numbers:
          </Text>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Text style={{fontSize:60}}> {x} * {y} = </Text>
            <TextInput
                  style={{fontSize:60}}
                  placeholder='???'
                  onChangeText={text => {setAnswer(text)}}
                  value={answer}
              />
          </View>

          {responseView}

          <View style={{flex:1}}>
              <Text> Correct: {correct}</Text>
              <Text> Answered: {answered}</Text>
              <Text> Percent Correct: {(correct/answered*100).toFixed(1)} </Text>

              <Button
                  title={(debugging?'hide':'show')+" debug info" }
                  color="green"
                  onPress = {() => setDebugging(!debugging)}
                  />
                  {debugView}
          </View>
        </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      border: "thick solid red",
      margin:"20px",
      padding:"20px",
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default MathQuiz;
