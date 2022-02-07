import { useState } from "react";
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import About from "./components/About"
import Team from "./Team"


function App() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <About/>
   <Team/>
   </>
  );
}

export default App;
