
import React,{useState,useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';



// const App = () => {...}
export default function App() {
  const [userId,setUserId] = useState("")
  const [showReps,setShowReps] = useState(false)
  const [repos,setRepos] = useState([])

  async function getRepos(userId) {
    let result = await fetch(`https://api.github.com/users/${userId}/repos`)
    let repos = await result.json()
    console.log(JSON.stringify(repos))
    setRepos(repos.length?repos:[])
  }


  const renderItem = ({item}) =>{
    return (
      <View style={{backgroundColor:"#cccccc", margin:20,padding:20}}>
        <Text style={{fontSize:20}}> {item.name} </Text>
      </View>
    )
  }

  useEffect(() => {
     try{
        if (showReps && userId!="") {
          getRepos(userId)
        } else {
          setRepos([{id:'none',name:'NONE'}])
          console.log('no userId yet')
        }
      } catch(e){
        setRepos([{id:'none',name:'No such id'}])
      }
    },
    [showReps])


  return (
    <SafeAreaView style={styles.container}>
      <View style={{
            flexDirection:'row',
            justifyContent:'center',
            backgroundColor:'black',
            width:'100%'}}>
        <Text style={styles.header}>
          Github Viewer
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:32}}>github Id:</Text>
        <TextInput
           style={{fontSize:32}}
           placeholder="userid"
           onChangeText = {(text) => setUserId(text)}
        />
      </View>
      <Button
          title={showReps?"hide repositories":"show repositories"}
          color="blue"
          onPress = {() => {
            console.log("pressed the button")
            setShowReps(!showReps)
          }}
      />
      <FlatList
          data={repos}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
      />
      <Text>DEBUGGING</Text>
      <Text>userId:{userId}</Text>
      <Text>showReps:{""+showReps}</Text>
      <Text> repos.length = {repos.length}</Text>



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
