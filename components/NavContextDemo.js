import React, { useState } from "react";
import ValueProvider from './ValueContext';
import NavDemo1 from './NavDemo1'

const App = () => {
  const data = {name:"no one", email:"non@none.com"}

  return (
    <ValueProvider value={data}>
        <NavDemo1 />
    </ValueProvider>
  )
}

export default App
