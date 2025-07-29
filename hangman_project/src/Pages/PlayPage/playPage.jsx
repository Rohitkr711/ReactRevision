import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import LetterButtons from "../../Components/LetterButtons/LetterButtons";
import MaskedText from "../../Components/MaskedText/MaskedText";
import Hangman from "../../Components/Hangman/Hangman";
import GameEnd from "../../Components/GameEnd/GameEnd";

let CurrArr = [];

function PlayPage() {

  const [usedLetters, setUsedLetters] = useState([]);
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [isWin, setIsWin] = useState(false)


  const location = useLocation();
  const wordSelected = location.state?.wordSelected;
  const wordLength = (Math.floor(wordSelected.length / 2) - 2)
  const userAttempts = wordSelected.length + ((wordLength > 0) ? wordLength : 0)

  const [Attempt, setAttempt] = useState(userAttempts)

  if (wordSelected === undefined) {
    navigate('/start');

  }



  const handleOnClickLetter = function (letter) {

    CurrArr.push(letter);
    console.log(CurrArr);

    setUsedLetters([...usedLetters, letter])
    setAttempt(prev => prev - 1)

    let wordSelectedArray = wordSelected.toUpperCase().split('');
    let isMatched = wordSelectedArray.every(char => CurrArr.includes(char));
    // console.log("Ismatched", isMatched);


    if (isMatched) {
      // console.log('word Matched');

      setIsWin(true);
      setStep(0);
    }
    else if (!wordSelectedArray.includes(letter)) {

      setStep(prev => prev + 1);
    }
  }




  return (
    <>
      <div>playPage</div>
      <MaskedText text={wordSelected} usedLetters={usedLetters} />
      <hr />

      <div className="flex justify-between items-center">
        <div className="basis-2/4">
          <div className="flex flex-col justify-center items-center gap-10">

            <div className="bg-red-600 p-2 rounded-md">Attempt Left :<span>{Attempt}</span></div>
            <div>
              <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleOnClickLetter} isWin={isWin} Attempt={Attempt}/>
            </div>
          </div>
        </div>
        <div className="basis-2/4 flex justify-center items-center">
          <Hangman step={step} isWin={isWin} AttemptLeft={Attempt} />
        </div>
      </div>

      <Link to="/start"><p className="border inline rounded-sm bg-red-300">Goto start page</p></Link>

      {!isWin && Attempt === 0 && <GameEnd text="You Lose the game🙁" />}
      {isWin && <GameEnd text="You Won the game🎉"/>}

    </>

  )
}

export default PlayPage;