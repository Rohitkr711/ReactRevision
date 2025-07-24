import { Link } from "react-router";
import MaskedText from "../../Components/MaskedText/MaskedText";

function PlayPage() {
  return (
    <>
    <div>playPage</div>
    <MaskedText text="Rohit" usedLetters={['o','t']} />

    <Link to="/start"><p className="border inline rounded-sm bg-red-300">Goto start page</p></Link>

    </>

  )
}

export default PlayPage;