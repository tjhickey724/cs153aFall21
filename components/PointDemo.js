import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Point,{adder,newPoint,origin} from '../lib/Point'

// const App = () => {...}
export default function App() {
  let p = new Point(3,5)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
          Point Demo
      </Text>
      <Text>
        the point is {p.toString()}
      </Text>
      <Text>
        the origin is {origin.toString()}
      </Text>
      <Text>
        double the point is {adder(p,p).toString()}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize:32,
    padding:25,
    color:"red",
    backgroundColor:'black',
  }
});
