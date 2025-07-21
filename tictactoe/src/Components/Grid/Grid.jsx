import { useState } from 'react'
import Card from "../Card/Card.jsx"

function Grid({ numOfCards }) {
    const [board, setboard] = useState(Array(numOfCards).fill(""))
    return (
        <>
            <div className="bg-orange-500 w-auto h-80 grid grid-cols-3 gap-2 p-2">
                {board.map((val, idx) => {
                    console.log('index', idx);
                    return <Card key={idx} playerInput={""} />
                })}
            </div>
        </>
    )
}

export default Grid;