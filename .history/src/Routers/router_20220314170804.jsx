import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page1 from "../Pages/Page2";

export default () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Page1 />} /> 
      <Route path="/Seleção/Veiculos" element={<Page2 />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}