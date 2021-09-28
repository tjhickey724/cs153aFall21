"WebViewer component ..."
import React, {useState} from "react";
import { ScrollView, Text, View, TextInput, Button  } from "react-native";
import ShowPage from './ShowPage'

const WebViewer = () => {
  const [url, setURL] = useState('');
  const [text, setText] = useState('');


  return (
   <ScrollView style={{padding:0,margin:0}}>
    <Text style={{fontSize:40}}> Web Viewer </Text>
    <View style={{padding:0,margin:0}}>
      <TextInput
        placeholder="enter URL here: https:...."
        style={{fontSize:30,color:'blue'}}
        onChangeText = {(text)=>setText(text)}
        />

      <View>
        <Button
           title="Go"
           onPress={() => setURL(text)}/>


      </View>


    </View>
    {url!=''?<ShowPage url={url} />:<Text>"nothing yet"</Text>}
    </ScrollView>
  );
}

export default WebViewer;
