import React, { useState, useContext } from "react";

const ValueContext = React.createContext(null)

const ValueProvider = ({value, children}) => {
  const [currentValue,setCurrentValue] = useState(value);

  return (
    <ValueContext.Provider value={{currentValue, setCurrentValue}} >
      {children}
    </ValueContext.Provider>
   )
}
export default ValueProvider
export const useValue = () => React.useContext(ValueContext)
