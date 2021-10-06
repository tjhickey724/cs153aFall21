import React, { useState } from "react";
import {View,Text,TextInput} from 'react-native';
import {useValue} from './ValueContext';

const Login = () => {
   const [eAdd,setEAdd] = useState("");
   let {currentValue,setCurrentValue} = useValue()
   return(
      <View>
         <TextInput
              placeholder="What's your email address? "
              value={currentValue.email}
              onChangeText={text =>{

                 setCurrentValue(
                    {name:currentValue.name,
                     email:text})
                  }}
         />
         <Text style={{fontSize:50}}>
           your email is: {eAdd}
         </Text>
      </View>
   )
}

export default Login
