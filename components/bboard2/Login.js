import React, { useState } from "react";
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from '../ValueContext';

const Login = () => {
   let {currentValue,setCurrentValue} = useValue()
   return(
      <View style={{padding:10,margin:10,backgroundColor:"#ddd"}}>
         <Text>
            Update Profile info
         </Text>
         <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text>username: </Text>
            <TextInput style={{backgroundColor:"#fca"}}
                 placeholder="Enter your username "
                 value={currentValue.name}
                 onChangeText={text=>
                    setCurrentValue(
                       {...currentValue, name:text}
                    )}
            />
         </View>
         

      </View>
   )
}

export default Login
