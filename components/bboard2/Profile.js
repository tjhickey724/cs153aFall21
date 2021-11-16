import React from 'react';
import {Text, View } from 'react-native';
import {useValue} from '../ValueContext';


export default function Profile() {
  let {currentValue} = useValue()
  return (
    <View style={{flex:1,padding:10,margin:10,backgroundColor:"#ddd "}}>
        <Text style={{fontSize:20}}>Username:{currentValue.name}</Text>
        <Text style={{fontSize:20}}>Email:{currentValue.email}</Text>
        <Text style={{fontSize:20}}>AppURL:{currentValue.appURL}</Text>
        <Text style={{fontSize:20}}>Secret:{currentValue.secret}</Text>
        <Text style={{fontSize:20}}>UserId:{currentValue.userid}</Text>
    </View>
  )
}
