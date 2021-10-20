import React from 'react';
import {View} from 'react-native'
import CloudRegistration from './CloudRegistration'
import Books from './Books'

export default function App() {
  return (
    <View>
      <Books />
      <CloudRegistration />
    </View>
  );
}
