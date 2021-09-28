"ShowPage component ..."
import React, { useState, useEffect } from "react";
import { ScrollView, Text, View,  } from "react-native";

const ShowPage = (props) => {
  const url = props.url
  const [text, setText] = useState('nothing yet');
  console.log(url)


  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((response) => {setText(response)})
      .catch((error) => {console.error(error)})
  });

  return (
   <ScrollView>
    <View>
      <Text style={{fontSize:30,color:'blue'}}>
        Show Page {url}
      </Text>
      <View style={{flexDirection:'row'}}>
        <Text>{text} </Text>

      </View>


    </View>
    </ScrollView>
  );
}

export default ShowPage;
