/*
 Modify this so that when the user presses a button (red,green, or blue)
 the corresponding component is shown beneath it. If they press "all" then
 all are shown. The initial configuration is 'all'.
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// const App = () => {...}

const RedComponent = () => {
  return ( <View style={{flex:1,backgroundColor:'pink'}}><Text>Red</Text> </View> )
}
const GreenComponent = () => {
  return ( <View style={{flex:1,backgroundColor:'lightgreen'}}><Text>Green</Text> </View> )
}
const BlueComponent = () => {
  return ( <View style={{flex:1,backgroundColor:'lightblue'}}><Text>Blue</Text> </View> )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
          Conditional Rendering
      </Text>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Button title="red" color="red"/>
          <Button title="green" color="green"/>
          <Button title="blue" color="blue"/>
          <Button title="all" color="gray"/>
      </View>

      <Text style={{fontSize:32}}>Selection: All</Text>

      <RedComponent />
      <GreenComponent />
      <BlueComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  header: {
    fontSize:32,
    padding:25,
    color:"red",
    backgroundColor:'black',
  }
});
