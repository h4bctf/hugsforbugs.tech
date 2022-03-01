import { useState } from "react";
import { Route , BrowserRouter ,Routes} from "react-router-dom";
import Navbar from "./components/Navbar"
import Banner from "./Home/Banner"
import About from "./Home/About"

import HomePage from "./Home/HomePage";



/* 337BD4, 11121A, FFFFFF, A3A4A8 */

function App() {
  return (
   <>
   <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} /> 
    </Routes>
    </BrowserRouter> 
   </>
  );
}

export default App;
