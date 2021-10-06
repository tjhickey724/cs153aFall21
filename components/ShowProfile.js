import React from 'react';
import {Text, View } from 'react-native';
import {useValue} from './ValueContext';

// const App = () => {...}
export default function App() {
  //let name="Tim"
  //let email ="tjhickey@brandeis.edu"
  let {currentValue} = useValue()
  const name = currentValue.name
  const email = currentValue.email
  return (
    <View style={{flex:1}}>
        <Text style={{fontSize:50}}>Name:{name}</Text>
        <Text style={{fontSize:50}}>Email:{email}</Text>
    </View>
  )
}
