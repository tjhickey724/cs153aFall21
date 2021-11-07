import React, { useState, useEffect } from "react";
import {View,Text,TextInput,
        Button,TouchableOpacity,
        FlatList,StyleSheet} from 'react-native'
import Axios from 'axios'

import ValueProvider,{useValue} from '../ValueContext';

const Item = ({item}) => {
  return (
    <View style={{padding:10,margin:10,backgroundColor:"#ddd"}}>
      <Text style={{fontSize:24}}>{item.title}</Text>
      <Text>{item.text}</Text>
      <Text>{item.createdAt}</Text>
    </View>
  )
}

const BBoards = () => {
  const {currentValue} = useValue();
  const [title,setTitle] = useState("");
  const [text,setText] = useState("");
  const [bboard,setBboard] = useState("");
  const [posts,setPosts] = useState([]);
  const [numNewPosts,setNumNewPosts] = useState(0)

  useEffect(() => {
    const getPosts = async () => {
      let result = {data:[]}
      result =
        await Axios.post(
          currentValue.appURL+"/posts",
          {bboard:bboard}
        )
      console.log('result=')
      console.dir(result.data)
      //result.data.reverse()
      setPosts(result.data)
      console.dir(result.data)
      return result.data
    }
    const ps = getPosts()
    console.log('posts are')
    console.dir(ps)
  },[bboard,numNewPosts])

  const addPost = async () =>{
    console.log('in addPost');
    console.log(title+" "+text+" "+JSON.stringify(currentValue));
    await Axios.post(currentValue.appURL+"/addComment",
        {email:currentValue.email,
         secret:currentValue.secret,
         bboard:bboard,
         title:title,
         text:text,
       });
    setTitle("");
    setText("");

    setNumNewPosts(numNewPosts+1)
  }


  return (
    <View style={{flex:1}}>

      <View style={styles.input}>
        <Text style={{marginRight:10}}>Bboard</Text>
        <TextInput
            onChangeText={(text) => setBboard(text)}
            placeholder="bboard name"/>
      </View>

      <View style={styles.input}>
          <Text> Add your own post</Text>
          <Text> You've made  {numNewPosts} new posts</Text>
          <TextInput
              onChangeText={(text) => setTitle(text)}
              value={title}
              placeholder="title"/>
          <TextInput
              onChangeText={(text) => setText(text)}
              value={text}
              placeholder="body of the post"/>
          <TouchableOpacity
              onPress = {() => addPost()}
              style={{width:200,backgroundColor:"#fca"}}>
              <Text>Submit</Text>
          </TouchableOpacity>
      </View>


      <View style={styles.posts}>
          <Text>
            BBoard n={""+posts.length}
          </Text>
          <FlatList
             style={{flex:1}}
             data = {posts}
             renderItem = {({item}) => (<Item item={item}/>)}
             keyExtractor = {(item) => item._id}
          />
      </View>



    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    borderColor:'red',
    borderWidth:5,
    borderRadius:20,
    backgroundColor:'#fcc',
    padding:5,
    margin:5,

  },
  posts:{
    borderColor:'blue',
    borderWidth:5,
    borderRadius:20,
    backgroundColor:'#ccf',
    padding:5,
    margin:5,

  },
})

export default BBoards;
