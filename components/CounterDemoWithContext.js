import React from "react";
import {View,StyleSheet,Text} from 'react-native';
import NamedCounterC from './NamedCounterWithContext';
import {useValue} from './ValueContext';


const CounterDemoWithContext = () => {
  const {currentValue} = useValue();
  const total = currentValue.total
  const count = currentValue.count

  return (
    <View style={{margin:'2%',marginTop:10,backgroundColor:'green',
            justifyContent:'flex-start',}}>
      <Text style={{fontSize:32}}>
        Counter Demo with Context
      </Text>
      <Text> Total = ${(total/100).toFixed(2)} </Text>
      <Text> Count = {count} </Text>
      <View style={{flexDirection:'row'}}>
        <NamedCounterC label="Pennies" value={1}   />
        <NamedCounterC label="Nickels" value={5}   />
        <NamedCounterC label="Dimes" value={10} />
      </View>
      <View style={{flexDirection:'row'}}>
        <NamedCounterC label="Quarters" value={25}  />
        <NamedCounterC label="Half Dollar" value={50}  />
        <NamedCounterC label="Dollar" value={100} />
      </View>
      <View style={{flexDirection:'row'}}>
        <NamedCounterC label="Five" value={500}  />
        <NamedCounterC label="Ten" value={1000}  />
        <NamedCounterC label="Twenty" value={2000}  />
      </View>
      <Text>Use a flatlist for this ...
        {JSON.stringify(currentValue.log,null,5)}
      </Text>
    </View>
  );
}

export default CounterDemoWithContext;
