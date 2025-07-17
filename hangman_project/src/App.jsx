import GetButton from "./Components/Buttons/getButton.jsx";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <GetButton text="Primary" type="Primary"/>
      <GetButton text="Secondary" type="Secondary"/>
      <GetButton text="Click" type="Click"/>

    </>
  )
}

export default App;