import React from 'react';
import {Text, View } from 'react-native';
import {useValue} from '../ValueContext';

import Login from './Login';

// const App = () => {...}
export default function App() {
  //let name="Tim"
  //let email ="tjhickey@brandeis.edu"
  let {currentValue} = useValue()
  const name = currentValue.name
  const email = currentValue.email
  return (
    <View style={{flex:1,padding:10,margin:10,backgroundColor:"#ddd "}}>
        <Text style={{fontSize:20}}>Username:{name}</Text>
        <Text style={{fontSize:20}}>Email:{email}</Text>
        <Text style={{fontSize:20}}>AppURL:{currentValue.appURL}</Text>
        <Text style={{fontSize:20}}>Secret:{currentValue.secret}</Text>
        <Login/>
    </View>
  )
}
