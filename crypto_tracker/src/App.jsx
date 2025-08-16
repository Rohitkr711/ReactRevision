import { useState } from "react";
import { Routes, Route } from "react-router";
import Banner from "./Components/Banner/Banner";
import CoinTable from "./Components/CoinTable/CoinTable";
// import Navbar from "./Components/Navbar/Navbar";
// import HomePage from "./Pages/HomePage/HomePage";
// import CoinDetail from "./Pages/CoinDetail/CoinDetail";
import { CurrencyContext } from "./Context/CurrencyContext";
import Routing from "./Components/Routing/Routing";
import Navbar from "./Components/Navbar/Navbar";

function App() {

  return (
    <>
      <Routing/>
    </>
  )
}

export default App;