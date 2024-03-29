import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Components/Home/home";
import Checkout from "./Components/Checkout/Checkout";
import Electronics from "./Components/Electronics/Electronics";
import Jewelery from "./Components/Jwellery/Jwellery";
import MenClothing from "./Components/MenClothing/MenClothing";
import WomenClothing from "./Components/WomenClothing/WomenClothing";
import Mobiles from "./Components/Mobiles/Mobiles";
import ProductDetails from "./Components/ProductDetails/productDetails";
import Login from "./Components/Login/login";
import Address from "./Components/Adress/adress";
import Payment from "./Components/payment/payment";
import YourOrders from "./Components/Your Orders/YourOrders";
// import ProtectedRoutes from "./Utilts/ProtectedRoutes";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Login Page */}
          <Route exact path="/login" element={<Login />}></Route>
          {/* Home Page */}
          <Route exact path="/" element={<Home />}></Route>
          {/* Orders Page */}
          <Route exact path="/yourOrders" element={<YourOrders />}></Route>
          
          {/* CheckOut Page */}
          <Route exact path="/checkOut" element={<Checkout />}></Route>
          {/* Electronics Category Page */}
          <Route exact path="/Electronics" element={<Electronics />}></Route>
          {/* Jewelery */}
          <Route exact path="/Jewelery" element={<Jewelery />}></Route>
          {/* Men Clothing */}
          <Route exact path="/MenClothing" element={<MenClothing />}></Route>
          {/* Women Clothing */}
          <Route
            exact
            path="/womenClothing"
            element={<WomenClothing />}
          ></Route>
          {/* Mobiles */}
          <Route exact path="/mobiles" element={<Mobiles />}></Route>
          {/* Product Details */}
          <Route
            exact
            path="/productDetails/:id"
            element={<ProductDetails />}
          ></Route>
          {/* <Route element={<ProtectedRoutes/>}> */}
           {/* Add Adress */}
          <Route exact path="/add-address" element={<Address />}></Route>
           {/* Payment Page */}
           <Route exact path="/payment" element={<Payment />}></Route>
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
