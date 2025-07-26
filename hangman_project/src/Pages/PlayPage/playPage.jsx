import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import LetterButtons from "../../Components/LetterButtons/LetterButtons";
import MaskedText from "../../Components/MaskedText/MaskedText";
import Hangman from "../../Components/Hangman/Hangman";

function PlayPage() {

  const [usedLetters, setUsedLetters] = useState([]);
  const navigate = useNavigate();
  const [step, setStep]=useState(0);

  const location = useLocation();
  const wordSelected = location.state?.wordSelected;
  if (wordSelected === undefined) {
    navigate('/start');

  }
  // const wordSelected = location.state;
  console.log("State value", wordSelected);



  const handleOnClickLetter = function (letter) {
    if(!wordSelected.toUpperCase().includes(letter)){
      console.log("Incorrect");
      
        setStep(()=>step+1);
    }
    setUsedLetters([...usedLetters, letter])
  }

  return (
    <>
      <div>playPage</div>
      <MaskedText text={wordSelected} usedLetters={usedLetters} />
      <hr />

      <div className="flex justify-between items-center">
        <div className="basis-2/4">
          <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleOnClickLetter} />
        </div>
        <div className="basis-2/4 flex justify-center items-center">
          <Hangman step={step} />
        </div>
      </div>

      <Link to="/start"><p className="border inline rounded-sm bg-red-300">Goto start page</p></Link>

    </>

  )
}

export default PlayPage;