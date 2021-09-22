import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, View, FlatList } from "react-native";

const CovidDemo = (props) => {
  const [loading,setLoading] = useState(true)
  const [state, setState] = useState('MA');
  const [text, setText] = useState('');
  const [data,setData] = useState([]);

  function covid_before(a, b) {
    var keyA = new Date(a.created_at),
      keyB = new Date(b.created_at);
    // Compare the 2 dates
    //if (a.state<b.state) return -1;
    //if (a.state>b.state) return 1;
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  }

  useEffect(() => {
    fetch('https://data.cdc.gov/resource/9mfq-cb36.json?state='+state)
      .then((response) => response.json())
      .then((cdata) => {
          // sort the list cdata and get most recent object ...
          cdata = cdata.sort(covid_before)
          setData(cdata)
        })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [state]);

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:1,backgroundColor:'#aaa'}}>{item['created_at'].slice(0,10)}</Text>
        <Text style={{flex:1,textAlign:'right'}}>{item.new_death}</Text>
        <Text style={{flex:1,textAlign:'right'}}>{item['new_case']}</Text>

     </View>
  )}

  return (
    <View style={{padding:40,margin:20,border: 'thick solid blue'}}>
      <Text style={{fontSize:30,color:'blue'}}>
        Covid19 Demo
      </Text>
      <View style={{flexDirection:'row'}}>
        <Text>Enter a state address </Text>
        <TextInput
          style={{height: 40}}
          placeholder="State Abbrev"
          onChangeText={text => {setText(text)}}
        />
      </View>
      <Button
        onPress={() => {
          setState(text)
        }}
        title="Get Covid Data Now"
      />
      <Text> Covid Data for {state} is </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:1,backgroundColor:'#eee'}}>date</Text>
        <Text style={{flex:1,textAlign:'right'}}>deaths</Text>
        <Text style={{flex:1,textAlign:'right'}}>cases</Text>
     </View>
      <FlatList
        data={data.slice(0,10)}
        renderItem={renderItem}
        keyExtractor={item => item.created_at}
      />

    </View>
  );
}

export default CovidDemo;
