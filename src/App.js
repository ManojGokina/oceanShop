import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      {/* Home page */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
