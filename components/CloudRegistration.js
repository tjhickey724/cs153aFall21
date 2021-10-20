import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'
import appKey,{appURL} from '../lib/appKey.js'


const CloudRegistration = () => {
  const [userKey,setUserKey] = useState(null)


  useEffect(() => {
              //clearAll()
              getData()}
           ,[])

  const storeData = async (key,value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
      } catch (e) {
        console.dir(e)
      }
  }

  const getData = async () => {
      try {
        let jsonValue = await AsyncStorage.getItem('@userKey')
        //jsonValue=null
        console.log('jsonValue = '+jsonValue)
        console.log('appKey = '+appKey)

        let data = null
        if (jsonValue!=null) {

          data = JSON.parse(jsonValue)
          setUserKey(data.userKey)
        } else {
          let result =
            await Axios.post(appURL+'/getNewUserKey',{appKey:appKey})
          console.log(`result=${result}`)
          console.dir(result)
          setUserKey(result.data.userKey)

          await AsyncStorage.setItem(key, JSON.stringify(result.data))
        }
      } catch(e) {
        console.dir(e)
      }
 }

 const clearAll = async () => {
      try {
        await AsyncStorage.clear()
      } catch(e) {
        console.dir(e)
      }
 }

  let registrationComponent = <Text>initializing userKey:{userKey}</Text>
  if (userKey){
    registrationComponent = (
      <View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-around'}}>
          <Text>UserKey = {userKey} </Text>
          <Button title="clear user key (Dangerous only for debugging)"
            color='red'
            onPress = {() => {clearAll()}} />
        </View>
      </View>
    )
  }

  return (
    registrationComponent
  )

}




export default CloudRegistration
