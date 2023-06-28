import './App.css';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Contact from './Contact';


function App() {
  return (
    <>
     <ChakraProvider>
      <Contact></Contact>
     </ChakraProvider>

    </>
  );
}

export default App;
