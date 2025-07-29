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
      <div className="playPage-container h-screen w-sreen flex justify-center items-center shadow-xl bg-gradient-to-b from-yellow-500 to-indigo-200">

        <div className="flex flex-col justify-evenly gap-6 playPage-ItemContainer w-2/3 h-2/3 px-2">

          <div className="MaskedElement ">
            <MaskedText text={wordSelected} usedLetters={usedLetters} />
          </div>
          <hr />

          <div className="flex justify-between items-center">
            <div className="basis-2/4">
              <div className="flex flex-col justify-center items-center gap-10">

                <div className="bg-red-500 text-white p-2 rounded-md">Attempt Left : <span>{Attempt}</span></div>
                <div>
                  <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleOnClickLetter} isWin={isWin} Attempt={Attempt} />
                </div>
              </div>
            </div>
            <div className="basis-2/4 flex justify-center items-center">
              <Hangman step={step} isWin={isWin} AttemptLeft={Attempt} />
            </div>
          </div>
          <hr />

          <div className="flex justify-center items-center">
            <div>
             <Link to="/"><p className="border inline bg-green-500 hover:bg-green-400 px-4 py-2 font-semibold rounded-md">Restart</p></Link>
            </div>
          </div>


          {!isWin && Attempt === 0 && <GameEnd text="You Lose the game🙁" />}
          {isWin && <GameEnd text="You Won the game🎉" />}

        </div>
      </div>
    </>

  )
}

export default PlayPage;