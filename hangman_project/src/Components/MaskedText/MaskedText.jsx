import { getAllCharacters } from "../../Utility/MaskedTextUtility";

/**
*
* @param {text} The word to be guessed
* @param {usedLetters} The array of letters that have been guessed so far
* @returns

 */
function MaskedText({text, usedLetters}) {
    const letters=getAllCharacters(text,usedLetters).split('')
    // console.log(letters);
    
  return (
    <>
    <div className="flex justify-center items-center">{letters.map((letter, idx)=>{
        return <span key={idx} className="mx-2 w-6 h-8 border-b-2 text-center shadow-lg border-black text-2xl font-medium">{letter}</span>
    })}
    </div>
    </>
  )
}


export default MaskedText;