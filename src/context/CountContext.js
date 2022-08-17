import { useContext, createContext, useState } from "react";

// Creating the context
const CountContext = createContext({});

// "children" will be all the components wrapped under CountContextProvider
// we will wrap our App.js component inside the CountContextProvider on index.js
const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // 'value' whatever inside this value object will be accesible to the wrapped components
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;

//useCountContext is the hook using which we will access the values in value object
export const useCountContext = () => useContext(CountContext);
