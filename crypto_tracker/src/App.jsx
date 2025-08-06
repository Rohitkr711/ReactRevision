import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import CoinTable from "./Components/CoinTable/CoinTable";
import Navbar from "./Components/Navbar/Navbar";

function App() {

  const[currency, setCurrency]=useState("USD")

  return (
    <>
      <div className="h-full w-screen" data-theme="halloween">
        <Navbar setCurrency={setCurrency} />
        <Banner/>
        <CoinTable currency={currency} />
      </div>
    </>
  )
}

export default App;