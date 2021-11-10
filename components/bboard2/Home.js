import React from "react";
import {View,Text} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
      <View style={{ flexDirection: 'row',
                     margin:25,
                     borderColor:"black",
                     padding:10,
                     justifyContent: 'space-around', }}>
        <Text style={{fontSize:40}}>
           Bulletin Board Mobile App
        </Text>

    </View>
  );
};

export default HomeScreen;
