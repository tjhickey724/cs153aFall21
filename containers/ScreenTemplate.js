import React from "react";
import { SafeAreaView, View, StyleSheet} from 'react-native'

const ScreenTemplate = ({header,footer,children}) => {

  return (
    <SafeAreaView style={styles.screen}>

      {header}

      <View style={{flex:1, backgroundColor:"#eee"}}>
            {children}
      </View>

      {footer}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:0,
    margin:0,
  },
})

export default ScreenTemplate
