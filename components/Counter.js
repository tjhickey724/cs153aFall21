import React, { useState } from "react";
import { Button, StyleSheet, Text,  View } from "react-native";


// const mph2fps = (mph) => mph*5280/3600

const Counter = ({start, name}) => {
// const Counter = (props) => {
//   const start = props.start
//   const name = props.name
  const [count, setCount] = useState(start);


      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       <Text style={{fontSize:100}}> {name}:</Text>
        Count = {count}
    </Text>

    <Button
          color='green' title='Increment'
          onPress = {() =>
               setCount(count+1)          }
      />

      <Button
            color='red' title='Decrement'
            onPress = {() =>
                 setCount(count-1)          }
        />


  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      //flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

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

export default  Counter;
