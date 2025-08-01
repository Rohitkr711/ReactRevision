import { Route, Routes } from "react-router";
import StartPage from "./Pages/StartPage/startPage.jsx";
import PlayPage from "./Pages/PlayPage/playPage.jsx"
import TextInputFormContainer from "./Components/TextInputForm/textInputFormContainer.jsx"
import GameOver from "./Components/GameEnd/GameEnd.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";

function App() {
  return (
    <>
      {/* <h1 className="text-2xl font-bold underline">Welcome to Hangman-Game</h1>
      <TextInputFormContainer onSubmit={(value) => console.log("Submitted value", value)} /> */}

      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="/gameEnd" element={<GameOver/>} />

        <Route path="/*" element={<HomePage/>} />

      </Routes>

    </>
  )
}

export default App;