import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

// const App = () => {...}
const PhotoID = ({name,imageurl}) => {
    const [image,setImage] = React.useState(imageurl)
    const [editing,setEditing] = React.useState(false)

    let editView =
      <TextInput
          style={{fontSize:24}}
          placeholder="url"
          onChangeText={text => {setImage(text)}}
      />

    return (
      <View style= {{flexDirection:'row', flex: 2}}>

          <View style= {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={{uri:image}}
                   style={{width:'100%',height:'100%'}}/>
          </View>
           <View style= {{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
             <Text style={{fontSize:48}}>{name} is the name</Text>
             {editing?editView:""}
             <Button title="edit" onPress={()=> setEditing(!editing)} />
        </View>
      </View>
    )}


export default PhotoID
