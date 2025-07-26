const Alphabets = new Array(26).fill('').map((ele, index) => String.fromCharCode(65 + index)); // Logically coded for future changes
// const Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');  Hard_Coded

function LetterButtons({text, usedLetters, onLetterClick }) {

    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));
    text = new Set(text.toUpperCase().split(''));


    const buttonStyle = function(letter) {
        if (selectedLetters.has(letter))
            return `${text.has(letter)? 'bg-green-700':'bg-red-700'}`;
        else
            return 'bg-blue-600 border-blue-700 hover:bg-blue-700';
    }

    const handleLetterButtonClick = function(event){
      const btnCharacter=event.target.value;
      onLetterClick?.(btnCharacter);        // It helps to know it's parent that which button is clicked
    }

    const buttons = Alphabets.map((letter) => {
        return (
            <button 
                key={`button-${letter}`}
                value={letter}
                disabled={selectedLetters.has(letter)}
                onClick={handleLetterButtonClick}
                className={`h-12 w-12 m-1 rounded-md focus-outline-none text-white ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        )
    })


    return (
        <>
            {buttons}
        </>
    )
}

export default LetterButtons;