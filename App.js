import React from 'react';
import {View} from 'react-native'
//import MathQuiz from './components/MathQuiz'
//import PointDemo from './components/PointDemo'
//import BankAcctDemo from './components/BankAcctDemo'
//import ConditionalRender from './components/ConditionalRender'
//import MathQuiz from './components/Grading'
import CloudRegistration from './components/CloudRegistration'
import Books from './components/Books'

export default function App() {
  return (
    <View>
      <Books />
      <CloudRegistration />
    </View>
    //<MathQuiz n={20}/>
    //<PointDemo />
    //<BankAcctDemo />
    //<ConditionalRender />
  );
}
