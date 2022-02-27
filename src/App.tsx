import { useState } from "react";
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import About from "./components/About"
import JoinDiscord from "./components/JoinDiscord";



/* 337BD4, 11121A, FFFFFF, A3A4A8 */

function App() {
  return (
   <>
   <JoinDiscord/>
   <Navbar/>
   <Banner/>
   <About/>
   </>
  );
}

export default App;
