import Navbar from "./component/Navbar";
import Product from "./component/Product";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar title="Jiya Fabrics" aboutText="About Us" contactText="Contact Us" />
        
        <div className="container my-3">
         
         <Routes>
 
           <Route path="/" element = {<Product/>}/>
           <Route path="/about" element = {<About />}/>
           <Route path="/contact" element = {<Contact />}/>

         </Routes>

        </div>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
