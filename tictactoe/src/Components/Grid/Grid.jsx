import { useState } from 'react'
import Card from "../Card/Card.jsx"
import isWinner from "../helper/checkWinner.js"

function Grid({ numOfCards }) {
    const [board, setboard] = useState(Array(numOfCards).fill(''));
    const [turn, setTurn] = useState(true);
    const [winner, setwinner] = useState('');

    function play(cardIndex) {

        if (turn)
            board[cardIndex] = 'O'
        else {
            board[cardIndex] = 'X'
        }

        setboard([...board]);
        const win = isWinner(board, turn ? 'O' : 'X');

        if (win) {

            setwinner(win)
        }

        setTurn(!turn);
    }

    function resetButtonHandler() {
        console.log('reset btn winner', winner);
        console.log('turn', turn);

        setTurn(turn => !turn);

        setboard(Array(numOfCards).fill(""))
        setwinner(null);
    }

    const isDraw = board.every((ele) => ele !== '') && !winner

    return (
        <>
            <div className='flex flex-col justify-center gap-4'>
                <h1 className='text-white font-bold text-center'>Current turn : {(turn) ? 'O' : 'X'}</h1>

                <div className="w-auto h-80 grid grid-cols-3 gap-2 p-2">
                    {board.map((val, idx) => {
                        return <Card key={idx} playerInput={val} onPlay={play} cardIndex={idx} gameEnd={winner ? true : false} />
                    })}
                </div>
                {
                    winner && (
                        <div className='flex justify-center flex-col items-center gap-4'>
                            <h1 className='font-bold text-center text-green-500'>Congrats '{winner}' has won 🎉</h1>
                            <button className='bg-red-500 text-white p-2 rounded-lg' onClick={resetButtonHandler}>Play again</button>
                        </div>
                    )
                }
                {
                    isDraw && (
                        <div className='flex justify-center flex-col items-center gap-4'>
                            <h1 className='text-white text-center'>Game drawn</h1>
                            <button className='bg-red-500 text-white p-2 rounded-lg' onClick={resetButtonHandler}>Play again</button>
                        </div>

                    )
                }
            </div>
        </>
    )
}

export default Grid;