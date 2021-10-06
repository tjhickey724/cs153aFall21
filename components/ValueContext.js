import React, { useState, useContext, createContext } from "react";

const ValueContext = createContext(null)

const ValueProvider = ({value, children}) => {
  const [currentValue,setCurrentValue] = useState(value);

  return (
    <ValueContext.Provider
        value={{currentValue,setCurrentValue}} >
      {children}
    </ValueContext.Provider>
   )
}
export default ValueProvider
export const useValue = () => useContext(ValueContext)
