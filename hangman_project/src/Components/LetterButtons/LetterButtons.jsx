const Alphabets = new Array(26).fill('').map((ele, index) => String.fromCharCode(65 + index)); // Logically coded for future changes
// const Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');  Hard_Coded

function LetterButtons({ text, usedLetters, onLetterClick, isWin, Attempt}) {

    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));
    text = new Set(text.toUpperCase().split(''));


    const buttonStyle = function (letter) {
        if (selectedLetters.has(letter))
            return `${text.has(letter) ? 'bg-green-600' : 'bg-red-600'}`;
        else if(isWin || Attempt===0)
            return 'bg-yellow-400 bg-yellow-500';
        else
            return 'bg-yellow-400 border-yellow-500 hover:bg-yellow-500';


    }

    const handleLetterButtonClick = function (event) {
        const btnCharacter = event.target.value;
        onLetterClick?.(btnCharacter);        // It helps to know it's parent that which button is clicked
    }

    const buttons = Alphabets.map((letter) => {
        return (
            <button
                key={`button-${letter}`}
                value={letter}
                disabled={selectedLetters.has(letter)|| isWin || Attempt===0}
                onClick={handleLetterButtonClick}
                className={`h-12 w-12 m-1 rounded-md focus-outline-none text-white font-medium shadow-lg outline-none ${buttonStyle(letter)}`}
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