import React, { useState } from "react";
import {View,StyleSheet,Button,Text} from 'react-native';


const NamedCounter = ({label,value,incrTotal}) => {
  const [total,setTotal] = useState(0)

  return (
    <View style={
      {margin:10,
       width:'25%',
       justifyContent:'spaceBetween',
      }
     }>
      <Button
         title={label}
         onPress={()=>{
              setTotal(total+1)
              incrTotal(value)
            }}
      />
      <Text> {total} </Text>
      <Text> ${(total*value/100).toFixed(2)} </Text>

    </View>
  );
}

export default NamedCounter;
