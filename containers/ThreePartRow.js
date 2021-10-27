import React from "react";
import {View,  StyleSheet} from 'react-native'

const ThreePartRow = ({left,content,right}) => {
  return (
    <View style={styles.banner}>
       {left}
       <View style={styles.centeredElt}>
          {content}
       </View>
       {right}
    </View>
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

export default ThreePartRow
