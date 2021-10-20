/*
 This App show how to store data in cloud

*/
import React, { useState, useEffect } from "react";
import {View,Text,Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'

import ValueProvider,{useValue} from './ValueContext';
import BookDemo from './BookDemo'

const App = () => {
  const appKey = '3398311'
  const appURL = 'https://desolate-brook-83944.herokuapp.com/appKey'
  //const appURL = 'http://localhost:5000/appKey'
  const data = {appKey:appKey,appURL:appURL}



  return (
      <ValueProvider value={data}>
          <BookDemo />
          <UserKeyScreen/>
      </ValueProvider>
  )
}



const UserKeyScreen = () => {
  const [debugging,setDebugging] = useState('false')
  const {currentValue,setCurrentValue} = useValue()

    useEffect(() => { getUserKey()},
              [])

    const getUserKey = async () => {
      const appKey = currentValue.appKey
      const appURL = currentValue.appURL
      // this function gets the userKey from asyncStorage if it is there
      // if not, it goes to the appURL to get a userKey which it stores in asyncStorage
       try {
         console.log('in getUserKey')
         let jsonValue = await AsyncStorage.getItem('@userKey')
         //jsonValue=null
         console.log('jsonValue = '+jsonValue)
         console.log('appKey = '+appKey)

         let userKey = null
         if (jsonValue!=null) {
           userKey = JSON.parse(jsonValue)
           console.log('userKeyData=')
           console.dir(userKey)
           let newData = {appKey,appURL,userKey:userKey}
           console.log('newData=')
           console.dir(newData)
           setCurrentValue(newData)
         } else {
           let result =
             await Axios.post(appURL+'/getNewUserKey',{appKey:appKey})
           console.log(`result=${result}`)
           console.dir(result)
           userKey = result.data.userKey
           setCurrentValue({appKey,appURL,userKey})

           await AsyncStorage.setItem(
             '@userKey',
             JSON.stringify(userKey))


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

  return (
    <View>
        {ui}
        <Button title="Toggle Network data"
                color="lightgreen"
                onPress = {() => setDebugging(!debugging)} />

    </View>
  )
}

export default App
