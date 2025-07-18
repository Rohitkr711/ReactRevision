import GetButton from "./Components/Buttons/getButton.jsx";
import TextInputForm from "./Components/TextInputForm/textInputForm.jsx";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold underline">Welcome to Hangman-Game</h1>
      <TextInputForm  onSubmit={(value)=>console.log("Submitted value",value)}/>

    </>
  )
}

export default App;