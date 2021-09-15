
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>

        <View style={{flex:1,backgroundColor:'yellow',}}>
              <Text style={{fontSize:64}}>
                  Quiz 1a
              </Text>
              <Text>CS153a Fall21 </Text>
              <Text>Write the code for this App, including the Quiz1a title and this text! The layout is five units high and 3 units wide</Text>
        </View>

        <View style={{flex:1,flexDirection:'row',
                      alignItems:'center',
                      justifyContent:'space-around'}}>
          <Text> Choose your gift by pressing the button </Text>
          <Button title="This is a big green button!" color="green"/>


        </View>

        <View style={{flex:3, flexDirection:'row',
                      backgroundColor:'lightgreen',
                      alignItems:'stretch',
                      justifyContent:'stretch'}}>
            <Text style={{flex:1}}>lightgreen</Text>
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={{flex:1, backgroundColor:'red'}}>
                  <Text>red</Text>
                </View>
                <View style={{flex:1, backgroundColor:'white'}}>
                  <Text>white</Text>
                </View>
                <View style={{flex:1, backgroundColor:'blue'}}>
                  <Text>blue</Text>
                </View>
            </View>
            <Text style={{flex:1}}>lightgreen</Text>

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

  },

});
