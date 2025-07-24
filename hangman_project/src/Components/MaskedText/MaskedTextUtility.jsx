export function getAllCharacters(word="Humble", usedLetters=['b','e']){
// This function will return a string with all the characters of the word that have been guessed so far
    usedLetters=usedLetters.map(letter=>letter.toUpperCase())
    const guessedLetters=new Set(usedLetters);
    const Allcharacters=word.toUpperCase().split('').map(letter=>{
        if(guessedLetters.has(letter))
            return letter;
        else
            return '_';
    })
    return Allcharacters.join(''); // _ _ _ B _ E
}