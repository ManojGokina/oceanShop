import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import React from 'react';
import "./App.css";
import Home from "./Components/Home/home";
import Checkout from "./Components/Checkout/Checkout";
import Electronics from "./Components/Electronics/Electronics";
import Jewelery from './Components/Jwellery/Jwellery';
import MenClothing from './Components/MenClothing/MenClothing';
import WomenClothing from './Components/WomenClothing/WomenClothing'
import Mobiles from './Components/Mobiles/Mobiles'

function App() {
   return (
    <div className="App">
    <Router>
       <Routes>
      {/* Home Page */}
          <Route exact path="/" element={<Home/>}></Route>
      {/* CheckOut Page */}
          <Route exact path="/checkOut" element={<Checkout/>}></Route>
      {/* Electronics Category Page */}
         <Route exact path="/Electronics" element={<Electronics/>}></Route>
      {/* Jewelery */}
         <Route exact path="/Jewelery" element={<Jewelery/>}></Route>
      {/* Men Clothing */}
         <Route exact path="/MenClothing" element={<MenClothing/>}></Route>
      {/* Women Clothing */}
         <Route exact path="/womenClothing" element={<WomenClothing/>}></Route>
          {/* Women Clothing */}
          <Route exact path="/mobiles" element={<Mobiles/>}></Route>
       </Routes>
    </Router>
    </div>
  );
}  

export default App;
