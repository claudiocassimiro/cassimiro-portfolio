import { useState } from 'react'
import AppContext from "./AppContext";

const ProvideContext = ({ children }) => {
  const [name, setName ] = useState('');

  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  );
}

export default ProvideContext;
