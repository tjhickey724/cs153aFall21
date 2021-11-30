import React, { useState, useEffect } from "react";
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'

import {useValue} from '../ValueContext';

const Registration = () => {
    const {currentValue,setCurrentValue} = useValue()
    const [debugging,setDebugging] = useState(true)
    const [email,setEmail] = useState("")
    const [checkedRegistration, setCheckedRegistration] = useState(false)


    useEffect(() => { getUserData()}, [])

    const registerEmail = async (email) => {
      try{
          let appURL = currentValue.appURL
          let result = await Axios.post(appURL+'/register',{email:email})
          let secret = result.data.secret
          let userid = result.data.userid

          await AsyncStorage.setItem(
            '@userData',
            JSON.stringify({...currentValue,email,secret,userid}))
          setEmail(email)
          setCurrentValue({...currentValue, email,secret,userid})
        }catch(e){
          console.log('error'+e)
          console.dir(e)

        }
    }


    const getUserData = async () => {
      let email = currentValue.email
      let secret = currentValue.secret
      const appURL = currentValue.appURL
      // this function gets the userKey from asyncStorage if it is there
      // if not, it goes to the appURL to get a userKey which it stores in asyncStorage
       try {
         console.log('in getUserData')
         let jsonValue = await AsyncStorage.getItem('@userData')
         //jsonValue=null
         console.log('jsonValue = '+jsonValue)

         let userData = null
         if (jsonValue!=null) {
           userData = JSON.parse(jsonValue)
           let newData =
            {appURL:currentValue.appURL,
              email:userData.email,
              userid:userData.userid,
              secret:userData.secret}
           setCurrentValue(newData)
           setEmail(userData.email)
           setCheckedRegistration(true)

         } else {
              console.log('else clause of Registration')
              setCheckedRegistration(true)
              console.log('no async, set checked to true')
         }
       } catch(e) {
         console.dir(e)
       }
    }

  let ui = <Text>nodebug</Text>
  if (debugging) {
    ui = (
      <View>
        <Text>
            currentValue={JSON.stringify(currentValue,null,5)}
        </Text>
      </View>
    )
  }




  return (
    <View><Text style={{fontSize:24}}>Mobile Bulletin Board</Text>
        <View style={{padding:10,margin:10,backgroundColor:"#ddd"}}>

             <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                <Text style={{fontSize:24}}>email: </Text>
                <TextInput
                     style={{fontSize:24}}
                     placeholder="Enter your email "
                     value={email}
                     onChangeText={text =>{ setEmail(text) }}
                />
             </View>

             {currentValue.email==""?
             (<TouchableOpacity
                onPress = {() => registerEmail(email)}
             >
               <Text style={{fontSize:20}}> Register </Text>
             </TouchableOpacity>)
             :
             (<TouchableOpacity
                onPress={async () => {
                  AsyncStorage.clear()
                  setEmail("")
                  setCurrentValue(
                    {appURL:currentValue.appURL,email:"",secret:""})
                }}
             >
               <Text style={{fontSize:20}}> Logout </Text>
             </TouchableOpacity>
           )}

        </View>

     </View>)
}

export default Registration;
