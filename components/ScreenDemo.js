import React from "react";
import { SafeAreaView, View, Text, StyleSheet} from 'react-native'
import ScreenTemplate from '../containers/ScreenTemplate'
import ThreePartRow from '../containers/ThreePartRow'
import PhotoID from './PhotoID'


const Header = () => {
  return (
  <ThreePartRow
       left = {<Text style={{fontSize:24}}>the left</Text>}
      right = {<Text style={{fontSize:24}}> the right </Text>}
    content = {<Text style={{fontSize:24}}> this is the content </Text>}
  />
)}


const ScreenDemo = () => {
  return (
    <ScreenTemplate
        header={<Header />}
        footer={<Text  style={{fontSize:32}}>this is the footer </Text>}
    >
        <Text style={{fontSize:32}}>Screen Demo</Text>
        <PhotoID
            name="Tim Hickey"
            imageurl="https://www.brandeis.edu/precollege/images/tim-hickey-speaking"
        />
    </ScreenTemplate>
  )
}

const styles=StyleSheet.create({
  centeredElt:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  banner:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})

export default ScreenDemo
