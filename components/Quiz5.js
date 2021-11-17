
import React,{useState,useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native';
import Axios from 'axios'


// const App = () => {...}
export default function App() {
  const [bb,setBb] = useState("")
  const [show,setShow] = useState(false)
  const [bbs,setBbs] = useState([])
  const [posts,setPosts] = useState([])

  async function getBbs() {
    console.log('in getBbs')
    let result = await Axios.get('https://glacial-hamlet-05511.herokuapp.com/bboardNames')
    let bbs = result.data
    console.log('inside getBbs with data!: '+bbs.length)
    console.log(JSON.stringify(bbs))
    setBbs(bbs.length?bbs:[])
  }

  async function getPosts() {
    console.log('in getPosts bb='+bb)
    let result = await Axios.post('https://glacial-hamlet-05511.herokuapp.com/posts',{bboard:bb})
    let posts = result.data
    console.log('inside getPosts with data!: '+posts.length)
    console.log(JSON.stringify(posts))
    setPosts(posts.length?posts:[])
  }


  const renderItem = ({item}) =>{
    return (
      <View style={{backgroundColor:"black", margin:5,padding:5}}>
        <TouchableOpacity
              onPress={() => setBb(item)}
              style={{fontSize:20}}>
          <Text style={{color:'red'}}>{item}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderPost = ({item}) =>{
    return (
      <View style={{backgroundColor:"#cccccc", margin:20,padding:20}}>

          <Text style={{fontSize:20 }}>{item.title}</Text>
          <Text>{item.text}</Text>

      </View>
    )
  }


  useEffect(() => {
     try{
        getPosts()
      } catch(e){
        console.log('error')
        console.dir(e)
      }
    },
    [bb])

  useEffect(() => {
     try{
        getBbs()
      } catch(e){
        console.log('error with getBbs')
        console.dir(e)
      }
    },
    [])


  return (
    <SafeAreaView style={styles.container}>
      <View style={{
            flexDirection:'row',
            justifyContent:'center',
            backgroundColor:'black',
            width:'100%'}}>
        <Text style={styles.header}>
          BBViewer
        </Text>
      </View>


      <View style={{flexDirection:'row'}}>
      <Button
          title="refresh bboards"
          color="blue"
          onPress = {() => {
            getBbs()
          }}
      />


      <FlatList
          horizontal={true}
          style={{flexGrow:0}}
          data={bbs}
          renderItem={renderItem}
          keyExtractor={item => item.toString()}
      />
      </View>
      <Text style={{fontSize:32}}>Selected bboard:
         <Text style={{backgroundColor:'black',color:'red'}}>
            {bb}
         </Text>
      </Text>

      <View style={{flex:1}}>
        <FlatList

            data={posts}
            renderItem={renderPost}
            keyExtractor={item => item.toString()}
        />
      </View>
      <Text>DEBUGGING</Text>
      <Text>bb:{bb}</Text>
      <Text>show:{""+show}</Text>
      <Text> bbs.length = {bbs.length}</Text>
      <Text>posts = {JSON.stringify(posts)}</Text>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:0,
    margin:0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize:32,
    padding:25,
    color:"red",
    backgroundColor:'black',
  }
});
