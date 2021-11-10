import React, { useState } from "react";
import ValueProvider from '../ValueContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, } from 'react-native';

import ShowProfile from './ShowProfile'
import Login from './Login'
import HomeScreen from './HomeScreen'
import BBoards from './BBoards'
import Registration from './Registration'

const Tab = createBottomTabNavigator();

const App = () => {
  const data =
    {name:"",
     email:"",
     appURL: 'https://glacial-hamlet-05511.herokuapp.com',
     //appURL: 'http://127.0.0.1:3000',
     secret: "",
   }

  return (
    <ValueProvider value={data}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component= {HomeScreen} />
          <Tab.Screen name="Login" component= {Login} />
          <Tab.Screen name="Profile" component= {ShowProfile} />
          <Tab.Screen name="BBoards" component= {BBoards} />
          <Tab.Screen name="Register" component= {Registration} />

        </Tab.Navigator>
      </NavigationContainer>
    </ValueProvider>
  )
}

export default App
