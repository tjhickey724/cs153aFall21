import React, { useState } from "react";
import {View,StyleSheet,Button,Text} from 'react-native';


const NamedCounter = (props) => {
  const [total,setTotal] = useState(0)

  return (
    <View style={
      {margin:10,
       width:'25%',
       justifyContent:'spaceBetween',
      }
     }>
      <Button
         title={props.label}
         onPress={()=>{
              setTotal(total+1)
              props.incrTotal(props.value)
            }}
      />
      <Text> {total} </Text>
      <Text> ${(total*props.value/100).toFixed(2)} </Text>

    </View>
  );
}

export default NamedCounter;
