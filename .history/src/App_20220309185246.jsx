import { GlobalStyle } from './GlobalStyle';
import Principal from './Principal';
import { useState, useEffect } from 'react';

function App() {

  const [principal, setPrincipal]=useState();
  return (
    <>
    <Principal setPrincipal={setGeral} geral={geral} />
    <GlobalStyle />
    </>
  );
}

export default App;
