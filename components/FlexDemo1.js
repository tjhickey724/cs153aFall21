
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:2, alignItems:'center',backgroundColor:'black',}}>
          <Text style={styles.header}>
              Flex Demo 1
          </Text>
          <Text style={{color:'white',fontSize:24}}>
            The URL for the picture of the puppy is
             https://image.shutterstock.com/image-photo/one-worlds-best-loved-dog-260nw-1621129573.jpg
          </Text>
      </View>
      <View style={{flex:8}}>
        <View  style={styles.vertical}>
          <View style={styles.upperLeft}>
              <Button title="A1"/>
              <Button title="A2" color="red"/>
              <Button title="A3"/>
          </View>
          <View style={styles.centered}>
              <Button title="B1"/>
              <Button title="B2"/>
              <Button title="B3"/>
              <Button title="B4"/>
              <Button title="B5"/>
              <Button title="B6"/>
              <Button title="B7"/>
              <Button title="B8"/>
              <Button title="B9"/>
          </View>
          <View style={styles.lowerRight}>
              <Button title="C1"/>
              <Button title="C2"/>
              <Button title="C3"/>
          </View>
        </View>
        <View  style={styles.horizontal}>
          <View style={styles.upperLeft}>
              <Button title="D1"/>
              <Button title="D2"/>
              <Button title="D3"/>
          </View>
          <View style={styles.centered}>
              <Button title="E1"/>
              <Button title="E2"/>
              <Button title="E3"/>
              <Button title="E4"/>
              <Button title="E5"/>
              <Button title="E6"/>
              <Button title="E7"/>
              <Button title="E8"/>
              <Button title="E9"/>
              <Button title="E10"/>
          </View>
          <View style={styles.lowerRight}>
              <Button title="F1"/>
              <Button title="F2"/>
              <Button title="F3"/>
          </View>
        </View>
        <View style={styles.horizontal}>
          <Image
             style={{width:"50%",}}
             source={{uri:'https://image.shutterstock.com/image-photo/one-worlds-best-loved-dog-260nw-1621129573.jpg'}}/>
          <View style={styles.formBox}>
            <Text style={{fontSize:32}}> Register Below </Text>
            <TextInput style={styles.input} placeholder="Full Name"/>
            <TextInput style={styles.input} placeholder="Age"/>
            <Button title="Submit" color="red"/>
          </View>
        </View>
      </View>
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
    flex:1,
    alignItems:'center',
    fontSize:64,
    padding:25,
    color:"red",
  },
  vertical: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'green',
  },
  horizontal: {
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'pink',
  },
  upperLeft:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: '5pt',
    flexDirection:'row',
  },
  centered:{
    flex:1,
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderWidth: '5pt',
    borderColor: 'red',
    padding:'10px',
    margin:'20px',
  },
  lowerRight:{
    flex:1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderWidth: '5pt',
    flexDirection:'row',
  },
  input:{
    color: 'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formBox:{
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'#fffff5',
  },
});
