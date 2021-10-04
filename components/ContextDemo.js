import React, { useState } from "react";
import ValueProvider from './ValueContext';
import CounterDemoWithContext from './CounterDemoWithContext'

const App = () => {
  const data = {total:0, count:0}

  return (
    <ValueProvider value={data}>
        <CounterDemoWithContext />
    </ValueProvider>
  )
}

export default App
