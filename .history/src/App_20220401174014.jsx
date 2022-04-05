import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { useState, useEffect } from 'react';
import Router from './Routers/router';
import { CustomContextProvider } from './context/custom';


function App() {


  return (
    <> 
    <CustomContextProvider ></CustomContextProvider>
    <Router />
    <GlobalStyle />
    </>
  );
}
 
export default App;
