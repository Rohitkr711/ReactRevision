import { useState } from "react";
import { Routes, Route } from "react-router";
import Banner from "./Components/Banner/Banner";
import CoinTable from "./Components/CoinTable/CoinTable";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import CoinDetail from "./Pages/CoinDetail/CoinDetail";
import { CurrencyContext } from "./Context/CurrencyContext";

function App() {

  // const[currency, setCurrency]=useState("USD")
  

  return (
    <>
      {/* <div className="h-full w-screen" data-theme="halloween">
        <Navbar setCurrency={setCurrency} />
        <Banner/>
        <CoinTable currency={currency} />
      </div> */}

      {/* <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/details" element={<CoinDetail/>} />

      </Routes> */}

{/* <CurrencyContext.Provider value={{currency,setCurrency}}> */}

      <HomePage/>
{/* </CurrencyContext.Provider> */}

    </>
  )
}

export default App;