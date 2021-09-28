/*
WebViewer component ...
This asks the user for a URL then displays the data on that
page using the ShowPage component.
It won't work in a web browser
unless CORS is disabled on the server
 try a github url, as github doesn't enforce CORS
 for example ...
https://raw.githubusercontent.com/tjhickey724/cs153aFall21/main/App.js
*/

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

    {url!=''?
        <ShowPage url={url} />:
        <Text>"nothing yet"</Text>}

    </ScrollView>
  );
}

export default WebViewer;
