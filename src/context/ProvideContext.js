import { useState, useEffect } from 'react'
import AppContext from "./AppContext";
import getPhrase from '../helpers/getPhrase';

const ProvideContext = ({ children }) => {
  const [name, setName ] = useState('');
  const [phrase, setPhrase] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getPhrase().then(({ text, author }) => {
      setPhrase(text);
      setAuthor(author);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <AppContext.Provider value={{ name, setName, phrase, author }}>
      {children}
    </AppContext.Provider>
  );
}

export default ProvideContext;
