/*
  Profile.js is a demo of using the Asynchronous Storage...
  It looks up your name and email and other info from async storage
  and puts it on the page. It also lets you update this info.

  Before loading this app you need to install async-storage with
  npm install @react-native-async-storage/async-storage
  Here is a link to the documentation:
  https://react-native-async-storage.github.io/async-storage/docs/api
*/
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = (props) => {
  const [info, setInfo] = useState({name:'',email:''});
  const [name, setName] = useState('');
  const [email,setEmail] = useState('')

  // when the component is loaded it gets the data from storage
  // and updatges the info, name, and email fields
  // but this is the only time useEffect is called
  useEffect(() => {getData()}
           ,[])

  // getData uses AsyncStorage to access the stored profile info as a string
  // then it uses JSON.parse to turn that string to a JSON object
  // finally it uses the set functions for the useState hook to set the
  // info, email, and name state variables.
  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@profile_info')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setInfo(data)
            setName(data.name)
            setEmail(data.email)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setName("")
            setEmail("")
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  // storeData converts the value stored in the info variable to a string
  // which is then writes into local storage using AsyncStorage.setItem.
  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@profile_info', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  // clearAll calls AsyncStorate.clear to remove all local storage for this app
  // we could be more selective and only remove the profile_info, but for
  // debugging it is good to remove everything
  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }




      return (
            <View style={styles.container}>
              <Text style={styles.header}>
                 Profile Demo
              </Text>
              <TextInput
                    style={styles.textinput}
                    placeholder="name"
                    onChangeText={text => {
                      setName(text)
                    }}
                    value={name}
                />
              <TextInput
                    style={styles.textinput}
                    placeholder="email"
                    onChangeText={text => {setEmail(text)}}
                    value={email}
                />
              <Button
                    color='red' title='Save Profile to Memory'
                    onPress = {() => {
                         console.log("saving profile");
                         const theInfo = {name:name,email:email}
                         console.log(`theInfo=${theInfo}`)
                         setInfo(theInfo)
                         console.log('data='+JSON.stringify(theInfo))
                         storeData(theInfo)
                       }}
                />
              <Button
                  color='green' title='Clear memory'
                  onPress = {() => {
                        console.log('clearing memory');
                        clearAll()
                      }}
                />
              <Button
                  color='blue' title='Load Profile from Memory'
                  onPress = {() => {
                        console.log('loading profile');
                        getData()
                      }}
                />
              <Text>
               name={name} email={email} info={JSON.stringify(info)}
              </Text>

            </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default Profile;
