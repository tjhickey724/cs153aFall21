import React from "react";
import { SafeAreaView, View, Text, StyleSheet} from 'react-native'
import ScreenTemplate from '../containers/ScreenTemplate'
import ThreePartRow from '../containers/ThreePartRow'
import PhotoID from './PhotoID'


const Header = () => {
  return (
  <ThreePartRow
       left = {<Text>the left</Text>}
      right = {<Text> the right </Text>}
    content = {<Text> this is the content </Text>}
  />
)}


const ScreenDemo = () => {
  return (
    <ScreenTemplate
        header={<Header />}
        footer={<Text>this is the footer </Text>}
    >
      <PhotoID name="Tim" imageurl="https://www.brandeis.edu/precollege/images/tim-hickey-speaking"/>
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
