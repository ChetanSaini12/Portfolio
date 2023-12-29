import "./App.css";
import Achievements from "./Components/Achievements";
import Contactme from "./Components/Contactme";
import Middle1 from "./Components/Designs/Middle1";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
    <Home/>
    <Middle1/>
    <Skills/>
    <Achievements/>
    {/* <Projects/> */}
    <Contactme/>
    </>
  );
}

export default App;
