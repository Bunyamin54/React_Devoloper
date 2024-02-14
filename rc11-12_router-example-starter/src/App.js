import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />

      <Routes>
      
      
    <Route path="/" element= {<Home />} /> 
    <Route path="/paths" element={<People/>}/>
      <Contact />
      <NotFound />


      </Routes>
   
      <Footer />
    </>
  );
}

export default App;
