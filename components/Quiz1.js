
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>

        <View style={{flex:2, flexDirection:'column',
              alignItems:'center',justifyContent:'space-around',backgroundColor:'yellow',}}>

              <Text style={{fontSize:64}}>
                  Quiz 1
              </Text>
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <Text style={{fontSize:16, width:"25%"}}>
                      Write the App.js code to create this app, including the Quiz 1 header above and all of the text that appears here.
                  </Text>
                  <Text style={{fontSize:16, width:"25%", color:'red'}}>
                      You may use any resources you want to complete this but do not
                      ask for help from anyone. This should be your work entirely.
                  </Text>
                  <Text style={{fontSize:16, width:"25%"}}>
                      Also, do not offer to help anyone, and if someone asks you for help
                      let me know so I can tell them this is inappropriate.
                  </Text>
              </View>
        </View>

        <View style={{flex:4, flexDirection:'row'}}>

            <View style={{flex:1, backgroundColor:'red',
                          alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:32, }}> Red Left</Text>
            </View>
            <View style={{flex:1, backgroundColor:'yellow',
                          alignItems:'center',justifyContent:'flex-end'}}>
              <Text style={{fontSize:32, }}> Yellow Middle</Text>
            </View>
            <View style={{flex:1, backgroundColor:'aqua',
                          alignItems:'flex-end',justifyContent:'flex-start'}}>
                  <Text style={{fontSize:32, }}> Aqua Right</Text>
             </View>
        </View>

        <View style={{flex:4, flexDirection:'row'}}>
          <Image style={{flex:1}} source={{uri:'https://www.rover.com/blog/wp-content/uploads/2018/11/dachshund-1519374_1920-960x540.jpg'}} />
          <Text style={{flex:1,fontSize:32, backgroundColor:'lightgreen' }}>
              Select any image of a puppy from the web for this quiz ...
          </Text>
          <Image style={{flex:1}} source={{uri:'https://www.rover.com/blog/wp-content/uploads/2018/11/dachshund-1519374_1920-960x540.jpg'}} />
          <View style={{flex:1}}>
              <Text style={{fontSize:32}}>
                    Enter your name and birth year in the textfields below
              </Text>
              <TextInput style={{fontSize:32,backgroundColor:'yellow'}}
                         placeholder="your full name" />
              <TextInput style={{fontSize:32,backgroundColor:'yellow'}}
                         placeholder="your birth year" />
              <Button style={{fontSize:32}} title="submit" color="red" />
          </View>

        </View>


        <View style={{alignItems:'center',backgroundColor:'mauve',}}>
            <Text style={{fontSize:16}}>
                The goal of this Quiz is to test your mastery of FlexBoxes,
                core ReactNative components, and basic component style elements.
            </Text>
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
    flexDirection:'column',
    margin:'20px',
    border:'thick solid black',
  },

});
