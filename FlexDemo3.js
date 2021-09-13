
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

// const App = () => {...}
export default function App() {
  let boxes = [1,2,3,4,5,6,7,8,9,10]
  let textBoxes =
       boxes.map((x) => {
           return(
              <Text style={{borderWidth:'10px', margin:'20px', height:'300px',
                           width:'300px',fontSize:30}}>
                {x}
              </Text>)
        })

  return (
    <View style={styles.container}>
      <View style={{flex:1, alignItems:'center',backgroundColor:'yellow',}}>
          <Text style={{fontSize:64}}>
              Flex Demo 3
          </Text>
      </View>
      <View style={{flex:8, flexDirection:'row'}}>
        <View style={{flex:1, backgroundColor:'red'}}>
          <Text style={{fontSize:32, }}> Left</Text>
        </View>

        <View style={{flex:9,  backgroundColor:'aqua'}}>
            <Text style={{flex:1, fontSize:32, }}>
                <Text style={{fontSize:64}}> Right.</Text>
                The header, footer, and sidebar all take 10% of the screen space.
            </Text>
            <View style={{flex:5,flexWrap:'wrap', flexDirection:'row',}}>
              { textBoxes }
            </View>

        </View>
      </View>

      <View style={{flex:1, alignItems:'center',backgroundColor:'yellow',}}>
          <Text style={{fontSize:64}}>
              Footer
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
  },

});
