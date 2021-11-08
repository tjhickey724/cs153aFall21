/*
 This App show how to interact with a NodeJS server.
 It uses the user's email to login to the server.
 Later we can have the server send an email to validate the user...

 UNDER CONSTRUCTION!!!
 The system currently checks async storage to look for login info.
 If it is not found, then it prompts for your email, logs you in,
 and gets a secret from the server.

 Next step is to write the BBoard code which shows the bboards
 and the posts in each bboard and lets you add posts...
 This might not be too hard.

 Also I need to have a logout button which clears AsyncStorage
 and resets the currentValue.


*/
import React, { useState, useEffect } from "react";
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'

import ValueProvider,{useValue} from '../ValueContext';
import BBoards from './BBoards'



const App = () => {
  const appURL = 'http://127.0.0.1:3000'
  //const appURL = 'http://localhost:5000/appKey'
  const data =
    {appURL:appURL,
     email:"",
     secret:"",
    }



  return (
      <ValueProvider value={data}>
        <View style={{backgroundColor:"#fca",flex:1}}>
          <Registration />
          <BBoards />
        </View>
      </ValueProvider>
  )
}


// this prompts the user for an email
// then it registers the app and gets a Secret number
// it can use to identify itself.

const Registration = () => {
    const {currentValue,setCurrentValue} = useValue()
    const [debugging,setDebugging] = useState('false')
    const [email,setEmail] = useState("")
    const [checkedRegistration, setCheckedRegistration] = useState(false)


    useEffect(() => { getUserData()}, [])

    const registerEmail = async (email) => {
      try{
          let appURL = currentValue.appURL

          let result = await Axios.post(appURL+'/register',{email:email})

          let secret = result.data.secret

          await AsyncStorage.setItem(
            '@userData',
            JSON.stringify({appURL,email,secret}))
          setEmail(email)
          setCurrentValue({appURL,email,secret})
        }catch(e){
          console.log('error'+e)
          console.dir(e)
          throw(e)
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
           console.log('userKeyData=')
           console.dir(userData)
           let newData =
            {appURL:currentValue.appURL,email:userData.email,secret:userData.secret}
           console.log('newData=')
           console.dir(newData)
           setCurrentValue(newData)
           setEmail(userData.email)
           setCheckedRegistration(true)
           console.log('found async, set checked to true')

         } else {
              console.log('else clause of Registration')
              setCheckedRegistration(true)
              console.log('no async, set checked to true')
         }
       } catch(e) {
         console.dir(e)
       }

       console.log('data=')
       console.dir(currentValue)
    }

  let ui = <View></View>
  if (debugging) {
    ui = (
      <View>
        <Text>
            currentValue={JSON.stringify(currentValue,null,5)}
        </Text>
      </View>
    )
  }

  let login = ""
  if (!checkedRegistration){
    login = <Text>Connecting to Server</Text>
  } else if (currentValue.email) {
      login = <Text>{email}</Text>
  } else {
      login = (
      <View>
          <View style={{flexDirection:'row'}}>
            <Text style={{paddingRight:20}}>Email</Text>
            <TextInput
                style={{backgroundColor:"#ccc"}}
                onChangeText={(text)=> setEmail(text)} />
          </View>
          <Button
                title="register"
                onPress = {() => registerEmail(email)}
          />

      </View>
    )
  }

  const logout = (
      <TouchableOpacity
         style={{fontSize:9}}
         onPress={async () => {
           AsyncStorage.clear()
           setCurrentValue(
             {appURL:currentValue.appURL,email:"",secret:""})
         }}
      >
        <Text> Logout </Text>
      </TouchableOpacity>
  )

  console.log('checked ='+checkedRegistration)
  console.log('login=')


//return (<View><Text>Testing</Text></View>)
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text>BBdemo</Text>        {login}        {logout}
    </View>
  )
}

export default App
