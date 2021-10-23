/*
  Books with Context
  This is a demo of an app which shows the users favorite books
  This gets the appKey, appURL, and userKey from the Context
*/
import React,{useState,useEffect} from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, TextInput, Button, StatusBar, Image } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'

import {useValue} from './ValueContext';
//import appKey,{appURL} from '../lib/appKey.js'





const Item = ({ title, author, description, id, json}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title.trim()}</Text>
        <Text>{author.trim()}</Text>
        <Text> {description} </Text>
        <Text> json form: {JSON.stringify(json)} </Text>
        <Button title={"id="+JSON.stringify(id)} />
      </View>
);

const App = () => {
  const {currentValue,setCurrentValue} = useValue();
  const appKey = currentValue.appKey
  const appURL = currentValue.appURL
  const userKey = currentValue.userKey
  console.log('currentValue=')
  console.dir(currentValue)

  const [data,setData] = useState([])
  const [books,setBooks] = useState([])
  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [description,setDescription] = useState("")

  useEffect(() => {
    getCloudData()
  },[])




  const storeCloudData = async (value) => {
    console.log('in storeCloudData, data=')
    let data = {appKey:appKey,
                userKey:userKey,
                valueKey:'@books',
                value:value}
    console.dir(data)
    let result =
      await Axios.post(appURL+'/storeData',data)
    console.log(`result=`)
    console.dir(result.data)
  }

  const getCloudData = async () => {
    console.log('in getCloudData data=')
    let data = {appKey:appKey,
                userKey:userKey,
                valueKey:'@books'}
    console.dir(data)

    let result =
      await Axios.post(appURL+'/getData',data)
    console.log(`result=`)
    console.dir(result)
    const books =
       result.data.map(
          (x) => {return {id:x._id, book:JSON.parse(x.value)}})
    console.log('books=')
    console.dir(books)
    setBooks(books)
  }

  const clearCloudData = async () => {
    console.log('in clearCloudData data=')
    let data = {appKey:appKey,
                userKey:userKey,
                valueKey:'@books'}
    console.dir(data)

    let result =
      await Axios.post(appURL+'/clearData',data)
    console.log(`result=`)
    console.dir(result)
    setBooks([])
  }

  const renderBook = ({ item }) => (
    <View>
      <Item
          title={item.book.title}
          author={item.book.author}
          description={item.book.description + JSON.stringify(item)}
          id = {item.id}
          json={item}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
     <ScrollView>
      <Text style={{fontSize:32,
                    backgroundColor:'red'}}>
         books
      </Text>
      <Text> userKey='{userKey}' appKey='{appKey}' appURL={appURL} </Text>
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item,index) => item.title+item.author+index}
      />
      <View>
        <Text>Add a book</Text>
        <TextInput placeholder="title" onChangeText={(text) => setTitle(text)} />
        <TextInput placeholder="author" onChangeText={(text) => setAuthor(text)} />
        <TextInput placeholder="description" onChangeText={(text) => setDescription(text)} />
        <View style={{flexDirection:'row'}}>
          <Button title="store book" color='pink' onPress={() =>{
            const book = {title,author,description}
            storeCloudData(book)
          }} />
          <Button title="get cloud data" color='lightgreen' onPress={() => getCloudData()} />
          <Button title="clear cloud data" color='red' onPress={() => clearCloudData()} />
        </View>
      </View>
     </ScrollView>
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

export default App;
