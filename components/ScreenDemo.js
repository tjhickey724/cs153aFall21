import React from "react";
import { SafeAreaView, View, Text, StyleSheet} from 'react-native'
import ScreenTemplate from '../containers/ScreenTemplate'

const Header = () => {
  return (
    <View style={styles.banner}>
       <Text>Left</Text>
       <View style={styles.centeredElt}>
          <Text>The header</Text>
       </View>
       <Text>Right</Text>
    </View>
   )

}

const Footer = () => {
  return (<Text>The footer</Text>)
}

const ScreenDemo = () => {
  return (
    <ScreenTemplate
        header={<Header/>}
        footer={<Footer/>}
    >
      <Text>Line 1</Text>
      <Text>Line 2</Text>
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
