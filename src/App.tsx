import { Route  ,Routes} from "react-router-dom";
import Navbar from "./components/Navbar"
import HomePage from "./components/Home/HomePage";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";

/* #337BD4,#191a27, #11121A, #FFFFFF, #A3A4A8 */

function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} /> 
      <Route path="/team" element={<Team/>} />
      <Route path="/blog" element={<Blog/>} />
    </Routes>
   </>
  );
}

export default App;
