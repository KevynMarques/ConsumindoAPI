import { GlobalStyle } from './GlobalStyle';
import Principal from './Principal';
import { useState, useEffect } from 'react';

function App() {

  const [principal, setGeral]=useState(<Sobre />);
  return (
    <>
    <Principal />
    <GlobalStyle />
    </>
  );
}

export default App;
