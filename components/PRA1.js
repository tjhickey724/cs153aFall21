import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>
        <View style = {{ flex: 1, flexDirection: 'row', backgroundColor: "white", }}> <Text style={{flex:1, fontSize:64}}>Hello</Text>
        <Text style={{flex:20,backgroundColor:'yellow'}}></Text>
        <Text style={{flex:1, fontSize:64}}>Home</Text>
        </View>

      <View style = {{ flex: 6, flexDirection: 'row' }}>
        <View style = {{ flex: 1, backgroundColor: "red"}}></View>
        <View style = {{ flex: 2, backgroundColor: "yellow", flexDirection: "column"}}>
          <View style = {{ flex: 1, backgroundColor: "green"}}></View>
          <View style = {{ flex: 1, backgroundColor: "yellow"}}></View>
          <View style = {{ flex: 1, backgroundColor: "blue"}}></View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection:'column',
  },

});
