import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


// const mph2fps = (mph) => mph*5280/3600

const TipCalculator = (props) => {
  const [meal, setMeal] = useState("0");
  const [tip, setTip] = useState(0);
  const [tipRate,setTipRate] = useState(props.tipRate)


      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       Tip Calculator for tiprate = {props.tipRate}
    </Text>
    <TextInput
          style={styles.textinput}
          placeholder="tipRate"
          onChangeText={text => {setTipRate(parseFloat(text))}}
      />
    <TextInput
          style={styles.textinput}
          placeholder="cost of meal"
          onChangeText={text => {setMeal(text)}}
      />
    <Button
          color='red' title='Calculate Tip'
          onPress = {() =>
               setTip(parseFloat(meal)*tipRate)          }
      />

    <Text> The tip is {tip} </Text>
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

export default TipCalculator;
