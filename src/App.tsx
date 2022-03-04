import { Route  ,Routes} from "react-router-dom";
import Navbar from "./components/Navbar"
import HomePage from "./components/Home/HomePage";
import Team from "./components/Team/Team";

/* #337BD4,#191a27, #11121A, #FFFFFF, #A3A4A8 */

function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} /> 
      <Route path="/team" element={<Team/>} />
    </Routes>

   </>
  );
}

export default App;
