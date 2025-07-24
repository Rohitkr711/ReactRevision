import { getAllCharacters } from "./MaskedTextUtility";

/**
*
* @param {text} The word to be guessed
* @param {usedLetters} The array of letters that have been guessed so far
* @returns

 */
function MaskedText({text, usedLetters}) {
    const letters=getAllCharacters(text,usedLetters).split('')
    console.log(letters);
    
  return (
    <>
    <div>{letters.map((letter, idx)=>{
        return <span key={idx} className="inline-block mx-1">{letter}</span>
    })}
    </div>
    </>
  )
}


export default MaskedText;