import React from 'react';
import {View} from 'react-native';
import NavDemo1 from './components/NavDemo1'
import Quiz1 from './components/Quiz1.js'
import Quiz1a from './components/Quiz1a.js'
import Grading from './components/Grading.js'
import PropDemo from './components/PropDemo.js'
import TipCalculator from './components/TipCalculator.js'

// const App = () => {...}
export default function App() {
  return (
   <TipCalculator tipRate={0.20} />
      //<PropDemo restName={"TJ's"} mealCost={100} taxRate={6.25} tipRate={20}  />
  );
}
