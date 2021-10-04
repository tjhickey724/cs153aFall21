import React, { useState } from "react";
import {View,StyleSheet,Text} from 'react-native';
import NamedCounter from './NamedCounter';


const CounterDemo = () => {
  const [count,setCount] = useState(0)
  const [total,setTotal] = useState(0)
  const incrTotal = (k) => {
          setTotal(total+k)
          setCount(count+1)
        }

  return (
    <View style={{margin:'2%',marginTop:10,backgroundColor:'lightgreen',
            justifyContent:'flex-start',}}>
      <Text> Total = ${(total/100).toFixed(2)} </Text>
      <Text> Count = {count} </Text>
      <View style={{flexDirection:'row',justifyContent:'space-around',}}>
        <NamedCounter label="Pennies" value={1}  incrTotal={incrTotal} />
        <NamedCounter label="Nickels" value={5}  incrTotal={incrTotal} />
        <NamedCounter label="Dimes" value={10} incrTotal={incrTotal} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',}}>
        <NamedCounter label="Quarters" value={25} incrTotal={incrTotal} />
        <NamedCounter label="Half Dollar" value={50} incrTotal={incrTotal} />
        <NamedCounter label="Dollar" value={100} incrTotal={incrTotal} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',}}>
        <NamedCounter label="Five" value={500} incrTotal={incrTotal} />
        <NamedCounter label="Ten" value={1000} incrTotal={incrTotal} />
        <NamedCounter label="Twenty" value={2000} incrTotal={incrTotal} />
      </View>
    </View>
  );
}

export default CounterDemo;
