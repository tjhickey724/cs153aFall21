import React from 'react';
import {View} from 'react-native';
import NavDemo1 from './components/NavDemo1'
import Quiz1 from './components/Quiz1.js'
import Quiz1a from './components/Quiz1a.js'
import Grading from './components/Grading.js'
import PropDemo from './components/PropDemo.js'
import TipCalculator from './components/TipCalculator.js'
import Counter from './components/Counter.js'

// const App = () => {...}
export default function App() {
  return (
    // <View style={{flexDirection:'row'}}>
    //     <PropDemo restName={"TJ's"} mealCost={100} taxRate={6.25} tipRate={20}/>
    //     <PropDemo restName={"Maria's"} mealCost={120} taxRate={6.25} tipRate={10}/>
    //     <PropDemo restName="George's" mealCost={10} taxRate={0.0} tipRate={20}/>
    // </View>
    <View>
      <Counter  start={10} name='students'/>
      <Counter  start={0}  name='non-students'/>
      <TipCalculator tipRate={0.2} />
    </View>
  );
}
