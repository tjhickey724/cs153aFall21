/*
  This is a demo of an app which shows the users favorite books
  but also show all of the favorite books of other users of this app.
  Clearly this is not scalable!
*/
import React,{useState,useEffect} from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, TextInput, Button, StatusBar, Image } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'
import appKey,{appURL} from '../lib/appKey.js'





const Item = ({ title, author, description}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title.trim()}</Text>
        <Text>{author.trim()}</Text>
        <Text> {description} </Text>
      </View>
);

const ListDemoScreen = () => {
  const [data,setData] = useState([])
  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [description,setDescription] = useState("")
  const [userKey,setUserKey] = useState(null) // used to store personal data in cloud

  useEffect(() => {
    getData('@userKey')
  }, [])

  useEffect(() => {
    getCloudData()
  },[userKey])



  const getData = async (key) => {
      try {
        let jsonValue = await AsyncStorage.getItem(key)
        if (jsonValue!=null) {
          let data = JSON.parse(jsonValue)
          setUserKey(data.userKey)
        }
      }catch(e){
        console.dir(e)
      }
    }

  const storeCloudData = async (value) => {
    let data = {appKey:appKey,
                userKey:userKey,
                valueKey:'@books',
                value:value}

    let result =
      await Axios.post(appURL+'/storeData',data)
    console.log(`result=`)
    console.dir(result.data)
  }

  const getCloudData = async () => {
    let data = {appKey:appKey,
                userKey:userKey,
                valueKey:'@books'}

    let result =
      await Axios.post(appURL+'/getData',data)
    console.log(`result=`)
    console.dir(result.data)
    const books = result.data.map((x) => JSON.parse(x.value))
    setData(books)
  }

  const renderItem = ({ item }) => (
    <View>
      <Item
          title={item.title}
          author={item.author}
          description={item.description}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:32,
                    backgroundColor:'red'}}>
         books
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title+item.author}
      />
      <View>
        <Text>Add a book</Text>
        <TextInput placeholder="title" onChangeText={(text) => setTitle(text)} />
        <TextInput placeholder="author" onChangeText={(text) => setAuthor(text)} />
        <TextInput placeholder="description" onChangeText={(text) => setDescription(text)} />
        <Button title="store book" color='pink' onPress={() =>{
            const book = {title,author,description}
            storeCloudData(book)
          }} />
        <Button title="get cloud data" color='lightgreen' onPress={() => getCloudData()} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex:4,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListDemoScreen;
