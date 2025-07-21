import Grid from "./Components/Grid/Grid.jsx";

function App() {
  return (
    <>
    <div className="body h-screen border-8 border-blue-600 flex justify-center items-center">
      <Grid numOfCards={9}/>
    </div>
    </>
  )
}

export default App;