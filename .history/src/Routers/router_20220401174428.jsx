import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomContextProvider } from "../context/custom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";


export default () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
    <CustomContextProvider >
      <Route path="/" element={<Page1 />} /> 
      <Route path="/Page2" element={<Page2 />} /> 
      <Route path="/Page3" element={<Page3 /> } /> 
     </CustomContextProvider>
    </Routes>
    </BrowserRouter>
    </>
  );
}